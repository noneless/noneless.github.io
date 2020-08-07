const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    //mini: false, //迷你模式
    fixed: true, //吸顶模式
    autoplay: true, //自动播放
    //theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    //order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'none', //预加载，可选值: 'none', 'metadata', 'auto'
    //volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    //mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    //listFolded: false, //列表默认折叠
    //listMaxHeight: 90, //列表最大高度
    //width: 210,
    
    audio: [ //音频信息,包含以下
        {
            name: '紫霞仙子（余轩Original Mix)', //音频名称
            artist: 'RT,余轩', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=555820893.mp3', //音频外链
            cover: 'http://p3.music.126.net/XZFM1XrG0C9fkIz2vrFt-Q==/109951163268930297.jpg', //音频封面
            theme: '#ebd0c2' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {
            name: '英雄联盟之艾瑞莉娅篇', //音频名称
            artist: '宋瑞 / 圈妹 / 小可', //音频艺术家
            url: 'http://ws.stream.qqmusic.qq.com/C400003rZdvH3HsIA3.m4a?guid=1758433068&vkey=6D7DCDAEC5E23356909A8B66048436778F7870ED8C9B14CB5543483F3FAC760727A25403DDC415589845F69836260D0B7D56385441E1ED58&uin=0&fromtag=66', //音频外链
            cover: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000000Nd78t4LPg26.jpg', //音频封面
            lrc: '英雄联盟之艾瑞莉娅篇', //音频歌词，配合上面的lrcType使用
            theme: '#ebd0c2' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {
            name: '什么叫做一厢情愿', //音频名称
            artist: 'DJ Mr.Zi', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=546035454.mp3', //音频外链
            cover: 'http://p3.music.126.net/K24oGeF8GvgUX3cEWJjcTA==/109951163183923296.jpg', //音频封面
        },
        {
            name: '我告诉你什么事最可悲', //音频名称
            artist: 'Jones & Brock&RTRemix', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=550453774.mp3', //音频外链
            cover: 'http://p3.music.126.net/IHzG7x8x9-KpoScvpU2SNg==/109951163231260063.jpg', //音频封面
        },
        {
            name: 'Five Hours', //音频名称
            artist: 'Deorro', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=28263911.mp3', //音频外链
            cover: 'http://p3.music.126.net/SnUXxv_U8Dr3BRK4tCSeKQ==/109951164642751154.jpg', //音频封面
            lrc: 'Five Hours', //音频歌词，配合上面的lrcType使用
            theme: '#ebd0c2' //切换到此音频时的主题色，比上面的 theme 优先级高
        }
    ]
});