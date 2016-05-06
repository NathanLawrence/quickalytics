//var $ = require('jquery');

var fillForm = function (event){
    var articleTitle = $('#article-title').val();
    var articleAuthor = $('#article-author').val();
    var articleTags = $('#article-tags').val();

    var baseURL = 'qa.exampledomain.com';

    var finalURL = encodeURI(`http://${baseURL}/app.html?title=${articleTitle}&author=${articleAuthor}&tags=${articleTags}`);

    $('#code-here').val(`<iframe frameborder="0" height="10px" width="100%" src="${finalURL}"></iframe>`);
    $('.alert-warning').addClass('hidden');
    $('.alert-success').removeClass('hidden');
}