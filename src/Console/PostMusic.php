<?php

namespace Leo\DailyMusic\Console;

use Flarum\Console\AbstractCommand;
use Maicol07\Flarum\Api\Client;
use Leo\DailyMusic\Model\DailyMusic;
use Leo\DailyMusic\Util\PushMsgUtil;

class PostMusic extends AbstractCommand
{
    protected $room_wxids = array(
        "91217048@chatroom", // family
        "24006113632@chatroom", // Battle-Ares
        "23935830943@chatroom", // Share Baby
    );

    protected function configure()
    {
        $this
            ->setName('leo:postmusic')
            ->setDescription('post music');
    }

    protected function fire()
    {
        $config = app('flarum.config');
        $url = (string)$config->url();
        $query = DailyMusic::query();
        $music = $query->where("released", 0)->orderBy("id", "asc")->limit(1)->get();

        if($music->isEmpty()){
            return false;
        }
        $music = $music[0];

        $api = new Client($url, ['token' => 'zhewvzlxzfgxhjnzyhfujicmyvsngmxc; userId=1']);

        $curl = curl_init();

        $request_data = [
            'attributes' => [
                'title'   => $music->title,
                'content' => sprintf("%s\n%s", $music->title, $music->url),
            ],
            'relationships' => [
                'tags' => [
                    'data' => [
                        [
                            'type' => 'tags',
                            'id'   => '5'
                        ]
                    ]
                ]
            ],
            'type' => 'discussions'
        ];

        try {
//            $response = $api->discussions()->post($request_data)->request();
            $this->pushToWechat($music->title, $music->url);
            $music->released = 1;
            $music->save();
        } catch (\Exception $e) {
            echo $e->getMessage();
        }

        // See https://docs.flarum.org/extend/console.html#console and
        // https://symfony.com/doc/current/console.html#configuring-the-command for more information.
    }

    public function pushToWechat($title, $url)
    {
        $songName = explode("-", $title)[0];
        $singer = explode("-", $title)[1];
        $url_components = parse_url($url);
        parse_str($url_components['query'], $params);
        $songID = $params['id'];
        $xml = "<msg>
            <appmsg appid=\"wx8dd6ecd81906fd84\" sdkver=\"0\">
            <title>%s</title>
            <des>%s</des>
            <action />
            <type>3</type>
            <showtype>0</showtype>
            <soundtype>0</soundtype>
            <mediatagname />
            <messageext />
            <messageaction />
            <content />
            <contentattr>0</contentattr>
            <url>https://y.music.163.com/m/song?id=%s</url>
            <lowurl />
            <dataurl>http://music.163.com/song/media/outer/url?id=%s</dataurl>
            <lowdataurl />

            <appattach>
                <totallen>0</totallen>
                <attachid />
                <emoticonmd5 />
                <fileext />
                <cdnthumburl>3057020100044b30490201000204630925e402032f4f5502044c72512a020462d910ed042439653032333165342d383830632d343065662d386665332d3135626333616632366438350204012400030201000405004c4c6d00</cdnthumburl>
                <cdnthumbmd5>cde2407e51ba286323cedd5300372487</cdnthumbmd5>
                <cdnthumblength>4504</cdnthumblength>
                <cdnthumbwidth>135</cdnthumbwidth>
                <cdnthumbheight>135</cdnthumbheight>
                <cdnthumbaeskey>6d3bfa9c5f19fc0b3ce3c2dbdf250830</cdnthumbaeskey>

                <encryver>0</encryver>

            </appattach>
            <extinfo />
            <sourceusername />
            <sourcedisplayname />
            <thumburl />
            <md5 />

            <directshare>0</directshare>
            <recorditem><![CDATA[(null)]]></recorditem>

            </appmsg>
            <fromusername>yuzhe5</fromusername>
            <scene>0</scene>
            <appinfo>
                <version>49</version>
                <appname>网易云音乐</appname>
            </appinfo>
            <commenturl />
        </msg>";
        $xml = sprintf($xml, $songName, $singer, $songID, $songID);
        foreach ($this->room_wxids as $room_wxid){
            PushMsgUtil::push($room_wxid, $xml, "xml");
        }
    }
}
