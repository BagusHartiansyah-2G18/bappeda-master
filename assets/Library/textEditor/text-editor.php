<!DOCTYPE html>
<html lang="en">
	<head>
		<script src="./plugins/global/plugins.bundle.js" type="text/javascript"></script>
		<script src="./js/scripts.bundle.js" type="text/javascript"></script>
	</head>

	<body >
        <div class="kt-wizard-v3__content" data-ktwizard-type="step-content">
            <div class="kt-form__section kt-form__section--first">
                <div class="kt-wizard-v3__form">
                    <div class="form-group">
                        <textarea class="form-control" id="isi" name="isi" rows="8"></textarea>
                    </div>
                </div>
            </div>
        </div>

<!-- end:: Content -->
    <script src="./plugins/custom/tinymce/tinymce.bundle.js" type="text/javascript"></script>
    <script type="text/javascript">

        jQuery(document).ready(function() {
            wizardEl = KTUtil.get('kt_wizard_v3');
            formEl = $('#kt_form');
            tinymce.init({
                mode : "textareas",
                //menubar : false,
                forced_root_block : false,
                force_br_newlines : true,
                force_p_newlines : false,
                height: 500,
                plugins: [
                    "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                    "searchreplace wordcount visualblocks visualchars code fullscreen",
                    "insertdatetime nonbreaking save table directionality",
                    "emoticons template paste  textpattern responsivefilemanager"
                ],
                toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image responsivefilemanager",

                external_filemanager_path: base_url + "/assets/",
                filemanager_title:"Responsive Filemanager" ,
                external_plugins: { "filemanager" : base_url + "/filemanager/plugin.min.js"},
                image_advtab: true,        
            });
        })

        var site_url = 'http://localhost:8080/';
        var base_url = 'http://localhost:8080/';

        var KTAppOptions = {
            "colors": {
                "state": {
                    "brand": "#5d78ff",
                    "dark": "#282a3c",
                    "light": "#ffffff",
                    "primary": "#5867dd",
                    "success": "#34bfa3",
                    "info": "#36a3f7",
                    "warning": "#ffb822",
                    "danger": "#fd3995"
                },
                "base": {
                    "label": [
                        "#c5cbe3",
                        "#a1a8c3",
                        "#3d4465",
                        "#3e4466"
                    ],
                    "shape": [
                        "#f0f3ff",
                        "#d9dffa",
                        "#afb4d4",
                        "#646c9a"
                    ]
                }
            }
        };
    </script>

	</body>
</html>