const $list = $('.img-list');
var index = 3;

function loadImages() {
    $.ajax({
        url : 'https://picsum.photos/list',
        dataType : 'json'
    })
    .done(ret => {
        ret.slice(0,3).forEach(user => {
            const $element = $(`
                <img src="http://source.unsplash.com/${user.post_url.substr(-11)}" />
            `);

            $list.prepend($element);
        });

        $('.btn').on('click', function(){
            ret.slice(index,index+3).forEach(user => {
                const $element = $(`
                        <img src="http://source.unsplash.com/${user.post_url.substr(-11)}">
                `);

                $list.prepend($element);
            });

            index += 3;
        });
    });
}
loadImages();
