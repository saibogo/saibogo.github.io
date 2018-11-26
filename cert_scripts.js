
            var certificateLinks = {
                aCertificates: ['<a href="https://www.intuit.ru/verifydiplomas/00171898"><img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-524806-ORF.jpg" alt="Вступительный тест в фундаментальную информатику"></a>'],      
                hCertificates: ['<a href="https://www.sololearn.com/Certificate/1014-7148489/pdf/"><img src="https://www.sololearn.com/Certificate/1014-7148489/jpg/" alt="Основы HTML/HTML5"></a>'],
                cCertificates: ['<a href="https://www.intuit.ru/verifydiplomas/00154286"><img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-507293-ORF.jpg"alt="С++ для профессионалов"></a>',
                '<a href="https://www.intuit.ru/verifydiplomas/00152252"><img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-505274-ORF.jpg"alt="Введение в C/C++"></a>'],

                pCertificates: ['<a href="https://www.sololearn.com/Certificate/1073-7148489/pdf/"><img src="https://www.sololearn.com/Certificate/1073-7148489/jpg/" alt="Основы Python 3"></a>',
                '<iframe src="CC_1.pdf"></iframe>', '<iframe src="CC_2.pdf"></iframe>', '<iframe src="CС_3.pdf"></iframe>'], 

                iCertificates: ['<a href="https://www.intuit.ru/verifydiplomas/00208204"><img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-560831-ORF.jpg" alt="Оптимизация с использованием ICC" </a>',
                '<a href="https://www.intuit.ru/verifydiplomas/00156010"><img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-509006-ORF.jpg" alt="Intel MKL"></a>',
                '<a href="https://www.intuit.ru/verifydiplomas/00154968"><img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-507968-ORF.jpg" alt="Intel Atom мобильная разработка"></a>',
                '<a href="https://www.intuit.ru/verifydiplomas/00156163"><img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-509158-ORF.jpg" alt="Оптимизация с использованием Intel MKL"></a>',
                '<a href="https://www.intuit.ru/verifydiplomas/00156164"><img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-509159-ORF.jpg" alt="Оптимизация с использованием Intel MKL"></a>',
                '<a href="https://www.intuit.ru/verifydiplomas/00218280"><img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-570876-ORF.jpg" alt="Оптимизация с использованием ICC"></a>',
                '<a href="https://www.intuit.ru/verifydiplomas/00218281"><img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-570877-ORF.jpg" alt="Оптимизация с использованием ICC"></a>',
                '<a href="https://www.intuit.ru/verifydiplomas/00154722"><img src="https://www.intuit.ru/sites/default/files/diploma/a/n/d/r/e/Nekommercheskoe_obrazovatelnoe_chastnoe_uchrejdenie_vyisshego_professionalnogo__obrazovaniya__Natsionalnyiy_otkryityiy_universitet__INTUIT_-2-507725-ORF.jpg" alt="Оптимизация с использованием ICC"></a>'],
            
                select: function(name) {
                  var keys = new Set(Object.keys(this));
                  keys.delete('select');
                  keys.delete('toHtml');
                  var result = [];
                  result = name === 'all' ? Array.from(keys).reduce((acc, key) => ([...acc, this[key]]), []) : result;
                  result = keys.has(name) ? this[name] : result;
                  return result;
                },

                toHtml: function(name) {
                  return this.select(name).join('\n');
                }
              }

          function getPageCertification() {
            return document.getElementById('certificates');
          }

          function cHandler() {
            getPageCertification().innerHTML = certificateLinks.toHtml('cCertificates');
          }

          function pythonHandler() {
            getPageCertification().innerHTML = certificateLinks.toHtml('pCertificates');
          }

          function htmlHandler() {
            getPageCertification().innerHTML = certificateLinks.toHtml('hCertificates');
          }

          function intelHandler() {
            getPageCertification().innerHTML = certificateLinks.toHtml('iCertificates');
          }

          function anyHandler() {
            getPageCertification().innerHTML = certificateLinks.toHtml('aCertificates');
          }

          function allHandler() {
            getPageCertification().innerHTML = certificateLinks.toHtml('all');
          }
