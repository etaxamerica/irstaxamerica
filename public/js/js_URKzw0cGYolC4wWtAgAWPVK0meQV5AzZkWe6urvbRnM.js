/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
include_js('/static_assets/js/leftnav','height.js');function include_js(path,filename){var location=path+"/"+filename;var head_dom=document.getElementsByTagName('head').item(0);var js=document.createElement('script');js.type='text/javascript';js.src=location;head_dom.appendChild(js);}function include_fed(path,filename){var location=path+"/"+filename;var head_dom=document.getElementsByTagName('head').item(0);var js=document.createElement('script');js.id='_fed_an_ua_tag';js.type='text/javascript';js.src=location;head_dom.appendChild(js);};
