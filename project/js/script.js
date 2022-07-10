$(function(){
    // ▼マウスが載ったらサブメニューを表示
    $("ul.ddmenu li").mouseenter(function(){
       $(this).siblings().find("ul").hide();  // 兄弟要素に含まれるサブメニューを全部消す。
       $(this).children().slideDown(150);     // 自分のサブメニューを表示する。
    });
    // ▼どこかがクリックされたらサブメニューを消す
    $('html').click(function() {
       $('ul.ddmenu ul').slideUp(150);
    });
 });

//ヘッダーホバー
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var item5 = document.getElementById("item5");
item1.addEventListener('mouseover', function() {
   item1.style.backgroundColor = 'orange';
 });
item1.addEventListener('mouseleave', function() {
item1.style.backgroundColor = '#FFD98A';
 });
 item2.addEventListener('mouseover', function() {
   item2.style.backgroundColor = 'orange';
 });
item2.addEventListener('mouseleave', function() {
item2.style.backgroundColor = '#FFD98A';
 });
 item3.addEventListener('mouseover', function() {
   item3.style.backgroundColor = 'orange';
 });
item3.addEventListener('mouseleave', function() {
item3.style.backgroundColor = '#FFD98A';
 });
 item4.addEventListener('mouseover', function() {
   item4.style.backgroundColor = 'orange';
 });
item4.addEventListener('mouseleave', function() {
item4.style.backgroundColor = '#FFD98A';
 });
 item5.addEventListener('mouseover', function() {
   item5.style.backgroundColor = 'orange';
 });
item5.addEventListener('mouseleave', function() {
item5.style.backgroundColor = '#FFD98A';
 });
