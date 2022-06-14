import app from 'flarum/admin/app';

app.initializers.add('leo-daily-music', function(app) {
    console.log(111)
  // Your Extension Code Here
  app.extensionData
    .for('leo-daily-music')
    .registerPermission(
        {
            icon: 'fas fa-rocket', // Any FontAwesome 5 icon class
            label: app.translator.trans('daily-music.admin.permissions.view_daily_music'), // Permission Label
            permission: 'shuke.daily_music.view', // Actual permission name stored in database (and used when checking permission).
            allowGuest: true, // Whether this permission can be granted to guests
        },
        'view',
    );
});
