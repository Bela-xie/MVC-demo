import './app2.css';
import $ from 'jquery'
let $tabBar = $('#app2 .tabBar');
let $contentBar = $('#app2 .contentBar');
$tabBar.on('click', e => {
    let index = $tabBar.children().index(e.target);
    $(e.target).addClass('selected').siblings().removeClass('selected');
    $contentBar.children().eq(index).addClass('show').siblings().removeClass('show');
})
$tabBar.children().eq(0).trigger('click')
// $('#app2 .tabBar li:first-child').trigger('click');