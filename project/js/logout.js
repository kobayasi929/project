//ログアウト
document.getElementById("logout").onclick = function() {
    var log = window.confirm("ログアウトしてもよろしいですか？");
    if(log){
        return true;
    }else{
        return false;
    }
}
