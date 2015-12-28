 var maps = [
            ['Baggot Street', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.36625363033!2d-6.251200283978807!3d53.33669968313453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e97cf75f087%3A0x4d21c4ad8342c123!2sBaggot+Street+Lower%2C+Dublin!5e0!3m2!1sen!2sie!4v1450715206416'],
            ['Sandyford', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9544.365322937816!2d-6.233677652992036!3d53.26998321209752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867090b5444013d%3A0x2600c7a819bb0531!2sSandyford%2C+Co.+Dublin!5e0!3m2!1sen!2sie!4v1450715933395'],
            ['Malahide', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19010.53828040766!2d-6.178169501084038!3d53.44491428028818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48671a891bda8a55%3A0xa00c7a9973215c0!2sMalahide%2C+Co.+Dublin!5e0!3m2!1sen!2sie!4v1450716067508']
        ];
        function doc(id) {
            return document.getElementById(id);
        }
        function showMap(n) {
            doc('mapbox').innerHTML = '<iframe width="100%" height="700" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="' + maps[n][1] + '"></iframe>';
            doc('cityname').innerHTML = '<h2>' + maps[n][0] + '</h2>';
            document.title = maps[n][0];
        }
        window.onload = function () {
            doc('loc').onchange = function () {
                this.blur();
                var val = new Number(this.options[this.selectedIndex].value) || false;
                if (val) {
                    showMap(val);
                }
            }
        }