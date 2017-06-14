describe('Wistia Uploader Component', function() {

  beforeEach(module('ProcessStreet'));
  var wistiaUploader;

  beforeEach(inject(function($componentController){
    wistiaUploader = $componentController('wistiaUploader', null, {apiPassword: '7a701bfc2817e7af361edcdd8cbea1934956d14af2084cbfbc9f3cf227c49519'});
  }));

  it('should be defined', function() {
    expect(wistiaUploader).toBeDefined();
  });

  it('should have an api password', function() {
    expect(wistiaUploader.apiPassword).toBeDefined();
  });

});
