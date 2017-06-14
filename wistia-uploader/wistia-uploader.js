function WistiaUploaderController($scope, $http, $sce) {

  this.$onInit = function() {
    $scope.options = {autoUpload: true, api_password: this.apiPassword};
    $scope.action = $sce.trustAsResourceUrl('https://upload.wistia.com?api_password='+this.apiPassword);
    $scope.wistiaEmbed = '';
  }

  $scope.$on('fileuploaddone', function(e, data){
    $scope.wistiaEmbed = $sce.trustAsHtml('<script src="https://fast.wistia.com/embed/medias/'+data.result.hashed_id+'.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:55.83% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_'+data.result.hashed_id+' videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>');
    $scope.queue = [];
  });
}

angular.module('ProcessStreet').component('wistiaUploader', {
  templateUrl: '../wistia-uploader/wistia-uploader.html',
  bindings: {apiPassword: '<'},
  controller: WistiaUploaderController
});
