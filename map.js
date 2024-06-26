// Initialize Leaflet map
var map = L.map('map').setView([40.7128, -74.0060], 10);

// Add the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Sample CSV data
// CSV data
var csvData = `the_geom,NAME,TEL,URL,ADDRESS1,ADDRESS2,CITY,ZIP
POINT (-74.01375579519738 40.703816216918035),Alexander Hamilton U.S. Custom House,(212) 514-3700,http://www.oldnycustomhouse.gov/,1 Bowling Grn,,New York,10004
POINT (-74.06303178855111 40.615120837755356),Alice Austen House Museum,(718) 816-4506,http://www.aliceausten.org/,2 Hylan Blvd,,Staten Island,10305
POINT (-73.94729768541572 40.833853500753314),American Academy of Arts and Letters,(212) 368-5900,http://www.artsandletters.org/,633 W. 155th St.,,New York,10032
POINT (-73.97810302110001 40.76162497138548),American Folk Art Museum,(212) 265-1040,http://www.folkartmuseum.org/,45 West 53rd Street,,New York,10019
POINT (-74.0396848374904 40.69905626244391),American Immigration History Center,(212) 363-3200,http://www.ellisisland.org/,Ellis Island,,New York,0
POINT (-73.97364816377815 40.78082623457644),American Museum of Natural History,(212) 769-5100,http://www.amnh.org/,Central Park West at 79th Street,,New York,10024
POINT (-74.00701187920873 40.72352659262823),American Numismatic Society,(212) 571-4470,http://www.numismatics.org/,75 Varick St,11th Floor,New York,10013
POINT (-73.96597045258356 40.76882422895272),Americas Society,(212) 249-8950,http://as.americas-society.org/,680 Park Ave.,,New York,10021
POINT (-73.99963036903092 40.721127449476676),Anne Frank Center USA,(212) 431-7993,http://www.annefrank.com/,38 Crosby Street,5th Floor,New York,10012
POINT (-73.96428395726613 40.76983378265351),Asia Society,(212) 288-6400,http://www.asiasociety.org/,725 Park Avenue,,New York,10021
POINT (-73.94654590494326 40.83358228246046),Audubon Terrace,,http://www.washington-heights.us/history/archives/audubon_terrace_museum_group_102.html,Broadway at 155 Street,,New York,10032
POINT (-73.80557949995756 40.87177831678272),Bartow-Pell Mansion,(718) 885-1461,http://bartowpellmansionmuseum.org/index.php,895 Shore Road,Pelham Bay Park,Bronx,10464
POINT (-73.82489046385625 40.762886331946646),Bowne House,(718) 359-0528,http://www.bownehouse.org/,37-01 Bowne Street,,Queens,11354
POINT (-73.87974874003561 40.87823644134894),Bronx Historical Society & Musem,(718) 881-8900,http://www.bronxhistoricalsociety.org/,3309 Bainbridge Ave,,Bronx,10467
POINT (-73.91975017724828 40.83102977992849),Bronx Museum of the Arts (BXMA),(718) 681-6000,http://www.bronxmuseum.org/,1040 Grand Concourse,,Bronx,10456
POINT (-73.94401601383748 40.67450699609931),Brooklyn Children's Museum,(718) 735-4400,http://www.brooklynkids.org/,145 Brooklyn Avenue,,Brooklyn,11213
POINT (-73.99240540393131 40.694802974910445),Brooklyn Historical Society,(718) 222-4111,http://www.brooklynhistory.org/default/index.html,128 Pierrepont Street,,Brooklyn,11201
POINT (-73.96358506797661 40.67108321212629),Brooklyn Museum,(718) 638-5000,http://www.brooklynmuseum.org/,200 Eastern Parkway,,Brooklyn,11238
POINT (-74.00731553374261 40.74789760206738),Chelsea Art Museum,(212) 255-0719,http://www.chelseaartmuseum.org/,556 West 22nd Street,,New York,10011
POINT (-73.97727391968168 40.78587092106756),Children's Museum of Manhattan,(212) 721-1234,http://www.cmom.org/,212 West 83rd Street,,New York,10024
POINT (-73.99883836090484 40.72074946881006),Children's Museum of the Arts,(212) 274-0986,http://cmany.org/intro.php?pn=home,182 Lafayette Street,,New York,10012
POINT (-73.93173408706043 40.86492363574811),Cloisters,(212) 923-3700,http://www.metmuseum.org/cloisters/,99 Margaret Corbin Drive,,New York,10040
POINT (-73.97985598415269 40.57526324252061),Coney Island Museum,(718) 372-5159,http://www.coneyisland.com/,1208 Surf Ave,,Brooklyn,11224
POINT (-73.95778161975461 40.78432573993682),"Cooper-Hewitt, National Design Museum",(212) 849-8400,http://www.cooperhewitt.org/,2 East 91st Street,,New York,10128
POINT (-73.97304190142106 40.76210697296256),Dahesh Museum,(212) 759-0606,http://www.daheshmuseum.org,580 Madison Avenue,,New York,10022
POINT (-73.94649318169672 40.83330210970132),Dia at the Hispanic Society,(845) 440-0100,http://www.diabeacon.org/,613 West 155th Street,,New York,10032
POINT (-74.00613537578622 40.747894926234274),Dia Art Foundation,(212) 989 5566,http://www.diacenter.org/,535 W 22nd Street,,New York,10011
POINT (-73.98731863959442 40.757501085511855),Discovery Times Square Exposition,(866) 987-9692,http://www.discoverytsx.com/nyc/,226 W 44th St,,New York,1036
POINT (-74.00290417204171 40.72245118852784),Drawing Center,(212) 219-2166,http://www.drawingcenter.org/about_visit.cfm,35 Wooster St.,,New York,10013
POINT (-73.92383914748758 40.86713092093551),Dyckman Farmhouse,(212) 304-9422,http://www.dyckmanfarmhouse.org/,4881 Broadway,,New York,10034
POINT (-73.99272306225821 40.72495970416682),East Village History Project,(212) 614-8702,http://leshp.org/,308 Bowery,,New York,10012
POINT (-73.95136760111666 40.793098920789426),El Museo del Barrio,(212) 831-7272,http://www.elmuseo.org/,1230 Fifth Ave,,New York,10029
POINT (-74.04132161794243 40.69820755330298),Ellis Island Museum,(212) 363-3200,http://www.ellisisland.org/,Ellis Island,,New York,0
POINT (-74.01133926317924 40.703399275987856),Fraunces Tavern Museum,(212) 425-1778,http://www.frauncestavernmuseum.org/,54 Pearl Street,,New York,10004
POINT (-73.96708040539806 40.77105465350546),Frick Collection,(212) 288-0700,http://www.frick.org/,1 E. 70th Street,,New York,10021
POINT (-74.07387774290744 40.6151652240151),Garibaldi-Meucci Museum,(718) 442-1608,http://statenislandusa.com/pages/garibaldi.html,420 Tompkins Avenue,,Staten Island,10305
POINT (-73.96174204015233 40.77916564085246),Goethe-Institut New York,(212) 439-8700,http://www.goethe.de/ins/us/ney/deindex.htm,1014 Fifth Avenue,,New York,10028
POINT (-73.9430684626868 40.77611345003038),Gracie Mansion,(212)-570-4751,http://www.nyc.gov/html/om/html/gracie.html,89th Street at East End Avenue,Carl Schurz Park,New York,10128
POINT (-73.91397962918033 40.85874716978858),Hall Of Fame For Great Americans,(718) 289-5161,http://www.bcc.cuny.edu/hallofFame/,Hall of Fame Terrace & Sedgwick Avenue,,Bronx,10453
POINT (-74.03231077573365 40.60900866850688),Harbor Defense Museum of Fort Hamilton,(718) 630-4349,http://www.harbordefensemuseum.com/,230 Sheridan Loop,,Brooklyn,11252
POINT (-73.94682282230515 40.833452146758084),Hispanic Society of America Museum,(212) 926-2234,http://www.hispanicsociety.org/,613 West 155th Street,,New York,10032
POINT (-73.89098784384107 40.87835786499017),Holocaust Museum & Studies Center,(718) 817-7700,http://www.holocauststudies.org/,75 W 205th St,,Bronx,10468
POINT (-74.01808694309555 40.67557193487433),Hudson Waterfront Museum and Showboat Barge,(718) 624-4719,http://www.waterfrontmuseum.org/,290 Conover St.,,Brooklyn,11231
POINT (-73.983836726072 40.756021151222605),International Center of Photography,(212) 857-0000,http://www.icp.org/,1133 Avenue Of The Americas,,New York,10036
POINT (-74.0008918064129 40.764783273941696),Intrepid Sea-Air-Space Museum,(212) 245-0072,http://www.intrepidmuseum.org/,Pier 86 12th Ave. & 46th Street,,New York,10036
POINT (-73.93765514503832 40.76695661305254),Isamu Noguchi Garden Museum,(718) 204-7088,http://www.noguchi.org/,32-37 Vernon Boulevard,,Long Island City,11106
POINT (-73.99749410687575 40.719194628210495),Italian American Museum,(212) 965-9000,http://www.italianamericanmuseum.org/,155 Mulberry St.,,New York,10013
POINT (-74.00664185516354 40.72335066225381),Jackie Robinson Museum,(212) 290-8600,http://www.jackierobinson.org/,1 Hudson Square,75 Varick Street 2nd Floor,New York,10013
POINT (-74.13812336582549 40.57631283530562),Jacques Marchais Center Museum of Tibetan Art,(718) 987-3500,http://www.tibetanmuseum.org/,338 Lighthouse Avenue,,Staten Island,10306
POINT (-73.94694494514727 40.850220034849166),Jeffrey's Hook lighthouse (Little Red Lighthouse),(212) 304-2365,http://www.nycgovparks.org/sub_about/parks_divisions/historic_houses/hh_little_red_light.html,178th Street at the Hudson River,,New York,10033
POINT (-73.95718705931057 40.785402256425414),Jewish Museum,(212) 423-3200,http://www.thejewishmuseum.org/index.php,1109 Fifth Ave,,New York,10128
POINT (-74.00965483733572 40.75233019732761),John J. Harvey Fireboat,,http://www.fireboat.org/,Pier 66 at West 26th Street,,New York,10001
POINT (-73.80376062063522 40.703042019259755),King Manor Museum,(718) 206-0545,http://www.kingmanor.org/,152-01 Jamaica Avenue,,Queens,11432
POINT (-73.82415641889934 40.763595705057114),Kingsland Homestead,(718) 206-0545,http://www.queenshistoricalsociety.org/kingsland.html,143-35 37th Avenue,,Queens,11354
POINT (-73.93514567999574 40.74396007246262),LaGuardia and Wagner Archives,(718) 482-5065,http://www.laguardiawagnerarchive.lagcc.cuny.edu/defaultc.htm,31-10 Thomson Ave.,Fiorello H. LaGuardia Community College/CUNY Room E-238,Queens,11101
POINT (-73.98618833058292 40.74719709497243),Lee Young Hee Museum of Korean Culture,(212) 560-0722,http://www.lyhkm.org/,2 West 32nd Street,Suite 301,New York,10001
POINT (-73.96381416125242 40.66437995594988),Lefferts Historic House,(718) 789-2822,http://www.prospectpark.org/visit/places/lefferts,Prospect Park Willink Entrance,Flatbush and Ocean Avenues and Empire Boulevard,Brooklyn,11215
POINT (-73.98870226140056 40.75631816305801),Madame Tussauds Wax Museum,(800) 246-8872,http://www.madametussauds.com/NewYork/,234 W. 42nd Street,,New York,10036
POINT (-73.99234604790877 40.72765741724545),Merchant's House Museum,(212) 777-1089,http://www.merchantshouse.com/,29 East Fourth Street,,New York,10003
POINT (-73.96345111145274 40.77942354199044),Metropolitan Museum of Art (MET),(212) 535-7710,http://www.metmuseum.org/,1000 Fifth Avenue,,New York,10028
POINT (-73.97988117952895 40.75078436678353),Mexican Cultural Institute of New York,(212) 217-6422,http://www.lavitrina.com/,27 E. 39th St.,,New York,10016
POINT (-73.98132148561602 40.74929507249673),Morgan Library and Museum,(212) 685-0008,http://www.themorgan.org/home.asp,225 Madison Avenue,,New York,10016
POINT (-73.93857438792728 40.834447679265466),Morris-Jumel Mansion,(212) 923-8008,http://www.morrisjumel.org/,65 Jumel Terrace,,New York,10032
POINT (-73.95971082928116 40.76052578447419),Mount Vernon Hotel Museum & Garden,(212) 838-6878,http://www.mvhm.org/,421 East 61 Street,,New York,10021
POINT (-73.97499987035063 40.75824830530754),Municipal Art Society,(212) 935-3960,http://mas.org/,457 Madison Avenue,,New York,10022
POINT (-73.92822391104288 40.74634173827231),Museum for African Art,(718) 784-7700,http://www.africanart.org/,36-01 43rd Avenue,3rd Floor,Queens,11101
POINT (-74.00912160394257 40.706484588627994),Museum of American Finance,(212) 908-4110,http://www.moaf.org/index,48 Wall Street,,New York,10005
POINT (-73.96690030997947 40.76471562244387),Museum of American Illustration,(212) 838-2560,http://societyillustrators.org/museum/index.cms,128 E. 63d St.,,New York,10021
POINT (-73.98200725142944 40.76740607395742),Museum of Arts & Design (MAD),(212) 299-7777,http://www.madmuseum.org/,2 Columbus Circle,,New York,10019
POINT (-73.98272584235525 40.77025240986238),Museum of Biblical Art,(212) 408-1200,http://www.mobia.org/,1865 Broadway,,New York,10023
POINT (-73.99919191942232 40.71945394633874),Museum Of Chinese In America,(212) 619-4785,http://www.mocanyc.org/,215 Centre Street,,New York,10013
POINT (-73.99670247583494 40.7247979456424),Museum of Comic and Cartoon Art (MoCCA),(212) 254 3511,http://www.moccany.org/,594 Broadway,Suite 401,New York,10012
POINT (-73.97442477664784 40.68524514383062),Museum of Contemporary African Diasporan Arts (MoCADA),(718) 230-0492,http://www.mocada.org/,80 Hanson Place,,Brooklyn,11217
POINT (-74.01858571588612 40.705986647371226),Museum of Jewish Heritage,(646) 437-4200,http://www.mjhnyc.org/index.htm,36 Battery Place,,New York,10280
POINT (-73.97700363152086 40.76118664102449),Museum of Modern Art (MoMA),(212) 708-9400,http://www.moma.org/,11 West 53rd Street,,New York,10019
POINT (-73.95191697462884 40.792509034510005),Museum of the City of New York,(212) 534-1672,http://www.mcny.org,1220 Fifth Avenue,,New York,10029
POINT (-73.92451017252192 40.75694448741239),Museum of the Moving Image,(718) 784-4520,http://www.movingimage.us/site/site.php,35 Avenue at 36 Street,,Queens,11106
POINT (-73.95849177369215 40.78361316720407),National Academy Museum,(212) 369-4880,https://nationalacademy.org/index.asp,1083 5th Avenue,,New York,10128
POINT (-74.07373713057605 40.64094901557986),National Lighthouse Museum,(718) 556-1681,http://statenislandusa.com/pages/lighthouse.html,1 Lighthouse Plaza,,Staten Island,10301
POINT (-74.01372704598201 40.704321256986034),National Museum of the American Indian,(212) 514-3700,http://www.nmai.si.edu/,1 Bowling Green,,New York,10004
POINT (-74.01091566131102 40.70965448747792),National September 11 Memorial & Museum at the World Trade Center,(212) 227-7722,http://www.911memorial.org/,1 Liberty Plaza,20th Floor,New York,10006
POINT (-73.96024812606315 40.78124233583781),Neue Galerie New York,(212) 628-6200,http://www.neuegalerie.org/,1048 Fifth Avenue,,New York,10028
POINT (-73.99283879250072 40.722346701845474),New Museum of Contemporary Art,(212) 219-1222,http://www.newmuseum.org/,235 Bowery,,New York,10002
POINT (-74.00693426094169 40.72557180583998),New York City Fire Museum,(212) 691-1303,http://www.nycfiremuseum.org/,278 Spring Street,,New York,10012
POINT (-74.00811754401903 40.70347829082743),New York City Police Museum,(212) 480-3100,http://www.nycpolicemuseum.org/,100 Old Slip,,New York,10038
POINT (-73.85168679568561 40.74714778785817),New York Hall of Science,(718) 699-0005,http://www.nysci.org/,47-01 111th Street,,Queens,11368
POINT (-73.97425753844574 40.77927324139346),New York Historical Society,(212) 873-3400,https://www.nyhistory.org/web/,2 West 77th Street,,New York,10024
POINT (-73.9791241123914 40.752422920262084),New York Tolerance Center,(212) 697-1180,http://www.kintera.org/site/pp.asp?c=fwLYKnN8LzH&b=242506,50 E 42nd St,,New York,10017
POINT (-73.9900259713183 40.69052369812635),New York Transit Museum,(718) 694-4915,http://www.mta.info/mta/museum/,Boerum Pl. & Schermenhorn Street,,Brooklyn,0
POINT (-73.96902249723335 40.802913999614184),Nicholas Roerich Museum,(212) 864-7752,http://www.roerich.org/,319 West 107 Street,,New York,10025
POINT (-74.10177203630597 40.64431194442387),Noble Maritime Collection,(718) 447-6490,http://www.noblemaritime.org/,1000 Richmond Terrace,,Staten Island,10301
POINT (-73.98461861468387 40.672993473207185),Old Stone House,(718) 768-3195,http://www.theoldstonehouse.org/,326 5th Avenue,,Brooklyn,11215
POINT (-73.94621241792795 40.74583946863492),P.S. 1 Contemporary Art Center,(718) 784-2084,http://www.ps1.org/,22-25 Jackson Ave.,,Queens,11101
POINT (-73.9776016138105 40.76057363859203),Paley Center For Media (formerly Museum Of Television & Radio),(212) 621-6800,http://www.paleycenter.org/,25 West 52 Street,,New York,10019
POINT (-73.89314845618621 40.76460725545623),Queens Art Museum - Bulova Corporate Center,(516) 624-1910,http://www.bdg.net/properties/1/,75-20 Astoria Blvd.,,Jackson Heights,11386
POINT (-73.72573660861673 40.74556960429117),Queens County Farm Museum,(718) 347-3276,http://www.queensfarm.org/,73-50 Little Neck Parkway,,Queens,11004
POINT (-73.8467627581779 40.7458428647494),Queens Museum of Art,(718) 592-9700,http://www.queensmuseum.org/,Queens Museum of Art,Flushing Meadows Corona Park,Queens,11368
POINT (-73.97257491067647 40.78285983221266),Rose Center for Earth and Space (Hayden Planetarium),(212) 769-5100,http://www.haydenplanetarium.org/index.php,15 West 81st Street,,New York,10024
POINT (-73.9799105035754 40.765012313344094),Rose Museum at Carnegie Hall,(212) 903-9629,http://www.carnegiehall.org/textSite/the_basics/art_museum_archives.html,154 West 57th Street,,New York,0
POINT (-73.99779152534921 40.74002038014153),Rubin Museum of Art,(212) 620-5000,http://www.rmanyc.org/,150 West 17th Street,,New York,10011
POINT (-74.21650281989129 40.5409783547753),Sandy Ground Historical Society,(718) 317-5796,http://statenislandusa.com/pages/sandy_ground.html,1538 Woodrow Road,,Staten Island,0
POINT (-73.98008843538526 40.74944689567966),Scandinavia House: The Nordic Center in America,(212) 879-9779,http://www.scandinaviahouse.org/,58 Park Ave.,,New York,10016
POINT (-73.94099076053165 40.814612726277666),Schomburg Center for Research in Black Culture,(212) 491-2200,http://www.nypl.org/research/sc/sc.html,515 Malcolm X Boulevard,,New York,10037
POINT (-73.98224232560065 40.73875919099525),School of Visual Arts Museum,(212) 592-2145,http://www.schoolofvisualarts.edu/sa/index.jsp?sid0=201&page_id=482&event_id=865,209 E. 23rd St.,,New York,10010
POINT (-74.19758929841912 40.51521434364335),Seguine Mansion,(718) 667-6042,http://www.historichousetrust.org/item.php?i_id=38,440 Seguine Avenue,,Staten Island,10307
POINT (-74.01756806833069 40.70565752977975),Skyscraper Museum,(212) 968-1961,http://www.skyscraper.org/home.htm,39 Battery Place,,New York,10280
POINT (-73.95891102040586 40.78300947618501),Solomon R. Guggenheim Museum,(212) 423-3500,http://www.guggenheim.org/,1071 Fifth Avenue,,New York,10128
POINT (-73.9735078210536 40.76147030101873),Sony Wonder Technology Lab,(212) 833-8100,http://wondertechlab.sony.com/,550 Madison Ave,Sony Plaza,New York,10022
POINT (-74.00372094057576 40.70660335756895),South Street Seaport Museum,(212) 748-8600,http://www.southstreetseaportmuseum.org/,12 Fulton Street,,New York,10038
POINT (-74.10189210518134 40.64270888224811),Staten Island Children's Museum,(718) 273-2060,http://www.statenislandkids.org/,1000 Richmond Terr.,,Staten Island,10301
POINT (-74.0776650626922 40.64436917860095),Staten Island Museum / Staten Island Institute of Arts & Sciences,(718) 727-1135,http://www.statenislandmuseum.org/,75 Stuyvesant Pl.,,Staten Island,10301
POINT (-73.94772615470191 40.808245476168075),Studio Museum in Harlem,(212) 864-4500,http://www.studiomuseum.org,144 West 125th Street,,New York,10027
POINT (-73.98967904824913 40.718687698398995),Tenement Museum,(212) 431-0233,http://www.tenement.org/,108 Orchard Street,,New York,10002
POINT (-73.98501448982452 40.719616728018636),"The Freakatorium, El Museo Loco",(212) 375-0475,http://www.freakatorium.com/,57 Clinton St.,,New York,10002
POINT (-73.9380587417615 40.80527638435791),The Jazz Museum in Harlem,(212) 348-8300,http://www.jazzmuseuminharlem.org/,104 E. 126th Street,Suite 2D,New York,10035
POINT (-73.94196177006319 40.66891157732498),The Jewish Children's Museum,(718) 467-0600,http://www.jcmonline.org/,792 Eastern Pkwy,,Brooklyn,11213
POINT (-73.99392966775832 40.74700837582729),The Museum at FIT,(212) 217-5800,http://www.fitnyc.edu/306.asp,7th Avenue at West 27th Street,,New York,10001
POINT (-73.98904085250442 40.738642014511264),Theodore Roosevelt Birthplace,(212) 260-1616,http://www.nps.gov/thrb/index.htm,28 East 20th Street,,New York,10003
POINT (-73.98975703078781 40.7276767876997),Ukrainian Museum,(212) 228-0110,http://www.ukrainianmuseum.org/,222 East 6th Street,,New York,10003
POINT (-73.87942471849595 40.877379824668694),Valentine-Varian House,(718) 881-8900,http://www.museumregister.com/US/NewYork/Bronx/ValentineVarianHouse/Info.html,3266 Bainbridge Ave.,,Bronx,10467
POINT (-73.89482257025313 40.89111116729143),Van Cortlandt House Museum,(718) 543-3344,http://www.vancortlandthouse.org/,VAN CRTLANDT MANSION,Broadway at West 246th Street,Bronx,10471
POINT (-73.91165376574718 40.89788471476036),Wave Hill,(718) 549-3200,http://wavehill.org/visit/,West 249th Street & Independence Avenue,,Bronx,10471
POINT (-73.96383434736195 40.773407292902185),Whitney Museum of American Art,1 (800) WHITNEY,http://www.whitney.org/,945 Madison Ave.,,New York,10021
POINT (-73.92079629906307 40.644340681393366),Wyckoff Farmhouse Museum,(718) 629-5400,http://www.wyckoffassociation.org/,5816 Clarendon Ave,,Brooklyn,11203
POINT (-73.99376449363902 40.73802754297413),Leo Baeck Institute,(212) 744-6400,http://www.lbi.org/,15 W. 16th St.,,New York,10011
POINT (-73.99388579658319 40.73807723317813),American Sephardi Federation / Sephardic House,(212) 294-8350,http://www.americansephardifederation.org/,15 W. 16th St.,,New York,10011
POINT (-73.99379427245329 40.73795994708654),YIVO Institute for Jewish Research,(212) 246-6860,http://www.yivoinstitute.org/,15 W. 16th St.,,New York,10011
POINT (-73.99392890421056 40.738015384101416),American Jewish Historical Society,(212) 294-6160,http://www.ajhs.org/,15 W. 16th St.,,New York,10011
POINT (-73.99381737049632 40.738045683847),Yeshiva University Museum,(212) 294-8330,http://www.yumuseum.org/,15 W. 16th St.,,New York,10011
POINT (-73.99386877223978 40.737986764588406),Center For Jewish History,(212) 294-8301,http://www.cjh.org,15 W. 16th St.,,New York,10011
`;

// Parse CSV data and add markers
// Insert your marker adding logic here
