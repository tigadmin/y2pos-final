function preview(id,previewId){
    $("#"+previewId+'-big').empty().append("<img class='preview_big' src='/resources/yumapos_site/img/hardware/"+id+".png'>");
    $("#"+previewId+"-small .preview-active").removeClass('preview-active');
    $("#"+id).find('img').addClass('preview-active')
}

