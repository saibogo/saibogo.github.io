
             var structure = [['cpp', 'C/C++', 'cCertificates'],
             ['c_sharp', 'C#', 'cSharpCertificates'],
             ['python', 'Python', 'pCertificates'],
             ['html', 'HTML+CSS3+JS', 'hCertificates'],
             ['intel', 'Intel', 'iCertificates'],
             ['javascript', 'JS', 'jsCertificates'],
             ['sql', 'SQL', 'sqlCertificates'],
             ['java', 'Java', 'jCertificates'],
             ['php', 'PHP', 'phpCertificates'],
             ['any', 'Прочее', 'aCertificates'],
             ['eng', 'English', 'engCertificates'], 
             ['all', 'Все', 'all']];
            
            var certificateLinks = {
                certificates: {
                  aCertificates: [],
                  hCertificates: [],
                  cCertificates: [],
                  cSharpCertificates: [],
                  pCertificates: [],
                  phpCertificates: [],

                  iCertificates: ['<a href="https://www.intuit.ru/verifydiplomas/00208204">'+
                  '<img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-560831-ORF.jpg" alt="Оптимизация с использованием ICC" </a>',
                  '<a href="https://www.intuit.ru/verifydiplomas/00156010">'+
                  '<img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-509006-ORF.jpg" alt="Intel MKL"></a>',
                  '<a href="https://www.intuit.ru/verifydiplomas/00154968">'+
                  '<img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-507968-ORF.jpg" alt="Intel Atom мобильная разработка"></a>',
                  '<a href="https://www.intuit.ru/verifydiplomas/00156163">'+
                  '<img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-509158-ORF.jpg" alt="Оптимизация с использованием Intel MKL"></a>',
                  '<a href="https://www.intuit.ru/verifydiplomas/00156164">'+
                  '<img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-509159-ORF.jpg" alt="Оптимизация с использованием Intel MKL"></a>',
                  '<a href="https://www.intuit.ru/verifydiplomas/00218280">'+
                  '<img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-570876-ORF.jpg" alt="Оптимизация с использованием ICC"></a>',
                  '<a href="https://www.intuit.ru/verifydiplomas/00218281">'+
                  '<img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-570877-ORF.jpg" alt="Оптимизация с использованием ICC"></a>',
                  '<a href="https://www.intuit.ru/verifydiplomas/00154722">'+
                  '<img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-507725-ORF.jpg" alt="Оптимизация с использованием ICC"></a>'],

                  jsCertificates: [],
                  jCertificates: [],
                  sqlCertificates:[],
                  engCertificates: []

                },

                select: function(name) {
                  var keys = new Set(Object.keys(this.certificates));
                  var result = [];
                  result = name === 'all' ? Array.from(keys).reduce((acc, key) => ([...acc, ...this.certificates[key]]), []) : result;
                  result = keys.has(name) ? this.certificates[name] : result;

                  //формируем списки без <iframe> и с ним
                  var resultNoIframe = result.filter((a) => (!a.includes('</iframe>')));
                  var resultIframe = result.filter((a) => a.includes('</iframe>'));

                  //Дальнейшее необходимо для выравнивания
                  while (resultIframe.length > 0 && (resultNoIframe.length > 0 && resultNoIframe.length % 3 != 0)) {
                    resultNoIframe.push('<a href="#"><img id="hidden-image" src="img/background/background1.jpg"></a>');
                  }

                  result = resultNoIframe.concat(resultIframe);

                
                  return result;
                },

                countInCategory: function(name) {
                  var result = this.select(name).length;
                  var countHidden = (this.select(name).filter(a => (a.includes('hidden-image')))).length;
                  return result - countHidden;
                },

                toHtml: function(name) {
                  return this.select(name).join('\n');
                },

              }

          function getPageCertification() {
            return document.getElementById('certificates');
          }

          function listElementNames() {
           
            structure.forEach(function(subArr) {
              var [id, value, key] = subArr;
              document.getElementById(id).innerHTML = `${value}(${certificateLinks.countInCategory(key)})`;
            });
          }
          
          function baseHandler(key) {
            getPageCertification().innerHTML = certificateLinks.toHtml(key);
          }

          function createListCertificates() {
            var listMenu = document.getElementById('navigator');
            var listElems = {
              cpp: 'baseHandler(\'cCertificates\')',
              c_sharp: 'baseHandler(\'cSharpCertificates\')',
              python: 'baseHandler(\'pCertificates\')',
              html: 'baseHandler(\'hCertificates\')',
              intel: 'baseHandler(\'iCertificates\')',
              javascript: 'baseHandler(\'jsCertificates\')',
              java: 'baseHandler(\'jCertificates\')',
              php: 'baseHandler(\'phpCertificates\')',
              any: 'baseHandler(\'aCertificates\')',
              sql: 'baseHandler(\'sqlCertificates\')',
              eng: 'baseHandler(\'engCertificates\')',
              all: 'allHandler()'
            }
            var resultList = Object.keys(listElems).map(key => `<li><a onclick="${listElems[key]}" id="${key}" class="certificates-navigation"></a></li>`);
            listMenu.innerHTML = resultList.join('');
          }

          function allHandler() {
            readJSON("json/html.json", 'html');
            readJSON("json/any.json", 'any');
            readJSON("json/python.json", 'python');
            readJSON("json/sql.json", 'sql');
            readJSON("json/javascript.json", 'javascript');
            readJSON("json/java.json", 'java');
            readJSON("json/php.json", 'php');
            readJSON("json/eng.json", 'eng');
            readJSON("json/cpp.json", 'cpp');
            readJSON("json/c_sharp.json", 'c_sharp');


            setTimeout(() => {
              createListCertificates();
              baseHandler('all');
              listElementNames();
            }, 3000);

            
          }

          function readJSON(url, nameCertSection) {
            
            var myFetch = fetch(url);
            var result = {};

            myFetch.then(function(response) {
              if (response.ok) {
                  response.json().then(function(json) {
                    data = json;
                    result = data;

                    var arrayLinks = convertJsonToArray(result);

                    structure.forEach(elem => {
                      [id, value, key] = elem;
                      if (id === nameCertSection) {
                        certificateLinks.certificates[key] = [].concat(arrayLinks);
                        }
                      });

                    });
                } else {
                  console.log("Not found JSON file!");
                }
              });
              
            }

            function convertJsonToArray(jsonObject) {
              var result = [];
              for (var key in jsonObject) {
                if (jsonObject[key]["type"] === "a") {
                  result.push('<a href="' + jsonObject[key]["href"] + '"><img src="' + jsonObject[key]["image"] + '" alt="' + jsonObject[key]["alt"] + '"></a>');
                } else {
                  result.push('<iframe src="' + jsonObject[key]["image"] + '#zoom=65"></iframe>');
                }
              }
              return result;
            }

