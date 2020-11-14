
            $(document).ready(function () {
              var t = $('#example').DataTable({
                  "order": [[1, "dsec"]] //desecnding sort in "Cases" column
              });

              var obj = [];
              
              fetch('https://api.covid19api.com/summary')
                  .then(res => res.json())
                  .then(data => obj = data.Countries)
                  .then(()=> {
                      for (let i = 0; i < obj.length; i++) {
                          t.row.add([
                              obj[i]["Country"],
                              obj[i]["TotalConfirmed"],
                              obj[i]["TotalDeaths"],
                              obj[i]["TotalRecovered"],
                              obj[i]["NewRecovered"],
                          ]).draw(false);

                      };
                  })

          });