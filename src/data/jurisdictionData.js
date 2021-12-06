const rawJurisdictionData = [
      {
        "id": "56AB4A52CA7F4EF6BE59A2EFFE662398",
        "title": "ACT",
        "type": "organization"
      },
      {
        "id": "2FEC7EA742444416BC3E0E955468251D",
        "title": "ACTFL",
        "type": "organization"
      },
      {
        "id": "526CDC474EBA461EB6C3D75014FCD8D9",
        "title": "AERO",
        "type": "organization"
      },
      {
        "id": "76186E8B0653445B95C875ED187E0205",
        "title": "AIS of Vienna",
        "type": "school"
      },
      {
        "id": "8052E3AA49F74087BA1A63A0624F0393",
        "title": "ALBUQUERQUE PUBLIC SCHOOLS",
        "type": "school"
      },
      {
        "id": "C135D96E72C34B628B086CC7C0243EE6",
        "title": "AMLE",
        "type": "organization"
      },
      {
        "id": "0A5FD99233A74D8FA3A74F52E5F6CDEC",
        "title": "AP/College Board",
        "type": "organization"
      },
      {
        "id": "3A4F64A6B79845888BADD3F0EC2CFF66",
        "title": "AQA (UK)",
        "type": "organization"
      },
      {
        "id": "BCE502C015EE46FCA4EA650CA3226728",
        "title": "ASA - American Sociological Association",
        "type": "organization"
      },
      {
        "id": "0236AE6365A94561A6A3F746171AA99C",
        "title": "ASE Education Foundation",
        "type": "organization"
      },
      {
        "id": "94707AD530CF4C62AF3E1FC199ACD062",
        "title": "AVID",
        "type": "organization"
      },
      {
        "id": "75B4347C4DB547269AAACD14EA4D00CF",
        "title": "Abilities Based Learning Education, Western Australia",
        "type": "organization"
      },
      {
        "id": "506E8D4104B441FEA8A971F2FA5C35CF",
        "title": "Academie Tien",
        "type": "organization"
      },
      {
        "id": "622455A457C94188A099FA2F6DE1A9E8",
        "title": "Addison School District 4",
        "type": "organization"
      },
      {
        "id": "44D6833687FD4231A1F54A0E09546547",
        "title": "Adventist Education - Elementary Standards",
        "type": "organization"
      },
      {
        "id": "CB84A6751C1745F9A418A2EF9A8F2691",
        "title": "Adventist Education - Secondary Standards",
        "type": "organization"
      },
      {
        "id": "DB7E1C07FEE948FF9A76CCFDE2A711D4",
        "title": "Agrupamento de escolas de Atouguia da Baleia",
        "type": "school"
      },
      {
        "id": "47B4662DF5584B7F82C9B987C55DEE7F",
        "title": "Airds High School",
        "type": "school"
      },
      {
        "id": "B838B98D043045748F3814B9E43CAC85",
        "title": "Alabama",
        "type": "state"
      },
      {
        "id": "FEE55463786649A6A26529B6B180AA49",
        "title": "Alabama Extended Standards",
        "type": "organization"
      },
      {
        "id": "0DCD3CBE12314408BDBDB97FAF45EEE8",
        "title": "Alaska",
        "type": "state"
      },
      {
        "id": "5C8C751020F44B39AD4BCB5E5B6680A4",
        "title": "Alberta",
        "type": "state"
      },
      {
        "id": "5C8C751020F44B39AD4BCB5E5B6680A5",
        "title": "Alberta (Français)",
        "type": "state"
      },
      {
        "id": "19CA1F6AF78840839C1283FE3FFE7C26",
        "title": "Alberta Education",
        "type": "organization"
      },
      {
        "id": "C30FC95F61CC4B65B21C8245D3747824",
        "title": "Alice Buffett Magnet Middle School",
        "type": "school"
      },
      {
        "id": "B5FB22F741D64921A27FE72FBCD31272",
        "title": "Alkira Secondary College",
        "type": "school"
      },
      {
        "id": "F445DE8E8A724DCD8ECD287731534B50",
        "title": "Almadina Language Charter Academy",
        "type": "organization"
      },
      {
        "id": "9D65E45961BC46218A6FA75732D733EB",
        "title": "American Association for the Advancement of Science",
        "type": "organization"
      },
      {
        "id": "6B4D002505FC4175967211744D11C325",
        "title": "American Association of School Librarians",
        "type": "organization"
      },
      {
        "id": "3C089F784844472083F9C3D1ACC2F200",
        "title": "American Classical League",
        "type": "organization"
      },
      {
        "id": "D6B57C25F8DC4CCCA9205D6AF12F5249",
        "title": "American Council on the Teaching of Foreign Languages",
        "type": "organization"
      },
      {
        "id": "B20B4882CE1B46659A0CBDCE85F382AA",
        "title": "American Dental Association",
        "type": "organization"
      },
      {
        "id": "EAC3937AB5494868A27CB7EC4DD90BCE",
        "title": "American Leadership Academy ",
        "type": "school"
      },
      {
        "id": "63CD52A014074BBCACC64A8954A97539",
        "title": "American Psychological Association",
        "type": "organization"
      },
      {
        "id": "4C8F8E9EFCC94AD781E39E1C5C1E1926",
        "title": "American School Counselor Association",
        "type": "organization"
      },
      {
        "id": "DCBCB244626E45E5818BA85410E47A96",
        "title": "American School Counselor Association",
        "type": "organization"
      },
      {
        "id": "D14F4EF0E1D643508CCDAED215F24116",
        "title": "American Society for Health-System Pharmacists",
        "type": "organization"
      },
      {
        "id": "B8CA5C7E09E0486BB3D24501CE3AF056",
        "title": "American String Teachers Association",
        "type": "organization"
      },
      {
        "id": "683EE7DAE4DE408EB16CCB9FBCA5A90C",
        "title": "American String Teachers Association",
        "type": "organization"
      },
      {
        "id": "F2F5DE30C4BF4BDF89014DB5F087D4E8",
        "title": "Archdiocese of Agana",
        "type": "organization"
      },
      {
        "id": "856B97CE86024C8A877CE8826C6AB7D8",
        "title": "Archdiocese of Chicago",
        "type": "organization"
      },
      {
        "id": "CCB2269EB2A44B40958224E641A5D0F5",
        "title": "Archdiocese of Cincinnati ",
        "type": "school"
      },
      {
        "id": "85F06BE514554DA780E3B0D56D707E91",
        "title": "Archdiocese of Denver",
        "type": "organization"
      },
      {
        "id": "24FEE9956FA440CA971F5EE2A1E19E26",
        "title": "Archdiocese of Indianapolis",
        "type": "organization"
      },
      {
        "id": "1CD495BC10B44AE58365C9084B5C4FEC",
        "title": "Archdiocese of Louisville",
        "type": "organization"
      },
      {
        "id": "0DCB619547034AD4A8C772E55665841E",
        "title": "Archdiocese of Miami",
        "type": "school"
      },
      {
        "id": "43119AFB305D4D099C15EE078693C536",
        "title": "Archdiocese of Milwaukee",
        "type": "organization"
      },
      {
        "id": "190E01C56D37488A92F6FF0F93C5AECA",
        "title": "Archdiocese of New Orleans",
        "type": "organization"
      },
      {
        "id": "D91F490FCBDD4D7E9DE2BFFF08E9B212",
        "title": "Archdiocese of St. Louis",
        "type": "organization"
      },
      {
        "id": "0B3FB145DD45478A9BE161EFAA2D510C",
        "title": "Archdiocese of Washington DC",
        "type": "organization"
      },
      {
        "id": "0B41FFF6B5114EB0B8A89CE0E70E22D8",
        "title": "Arizona",
        "type": "state"
      },
      {
        "id": "2E9F2A0F3440479492D152F02F081AF1",
        "title": "Arkansas",
        "type": "state"
      },
      {
        "id": "2713BD55BA894672BAFC04F47CFD57D3",
        "title": "Armuchee Elementary School",
        "type": "school"
      },
      {
        "id": "B24BE72BF5E34B7C889790315071E5B6",
        "title": "Association of American Medical Colleges",
        "type": "organization"
      },
      {
        "id": "3F7EF92F2EF8454F8CD355194AE2B0AB",
        "title": "Association to Advance Collegiate Schools of Business",
        "type": "organization"
      },
      {
        "id": "47864D9B970F4A87A7B1624D9DF89ED7",
        "title": "Assumption College Thonburi",
        "type": "school"
      },
      {
        "id": "A40459A7C1324959A4C548636F4CB938",
        "title": "Atlanta International School - Horizons",
        "type": "school"
      },
      {
        "id": "F75183BD413F4F5FB7A34EB982ECBABD",
        "title": "Australia",
        "type": "country"
      },
      {
        "id": "CCF00D6D47C149B78B2339F8A137836D",
        "title": "Australian Curriculum",
        "type": "organization"
      },
      {
        "id": "5F1D84C1EB1C4F7DB2D1D8360F3CF04B",
        "title": "Australian Government Department of Education and Training",
        "type": "organization"
      },
      {
        "id": "83E62C7E58914847B9226BD7CCC83DC9",
        "title": "BELLEVUE SCHOOL DISTRICT",
        "type": "school"
      },
      {
        "id": "09B4D9DF84A84FADBFF32494514C9247",
        "title": "Baltimore City Public Schools",
        "type": "school"
      },
      {
        "id": "3B7176AFBF774FA7BD68A698749915F4",
        "title": "Bartholomew Consolidated School Corporation",
        "type": "school"
      },
      {
        "id": "2350D614637643768DBD2970FFBF6055",
        "title": "Beaverton School District",
        "type": "school"
      },
      {
        "id": "9942968EEE6245A994D80425A63299DA",
        "title": "Berkeley County School District",
        "type": "organization"
      },
      {
        "id": "F05D2CF7134945119C1B4502C5CA2A0E",
        "title": "Blackstone Valley Prep ",
        "type": "school"
      },
      {
        "id": "55346B7EBA0A45629F365C8659DF235E",
        "title": "Bloom's Taxonomy",
        "type": "organization"
      },
      {
        "id": "2707EC00C07445ADBE4087375E0C3B2C",
        "title": "Blue Ridge ",
        "type": "school"
      },
      {
        "id": "37C1A32D523D4036AE8DFBCD27F7BB02",
        "title": "Bridge Academy",
        "type": "school"
      },
      {
        "id": "0BCCA070E67B48A7A4E216D96CCFD8F7",
        "title": "Brighten Academy Charter School",
        "type": "school"
      },
      {
        "id": "27702E75622642399036EF059126D888",
        "title": "British Columbia",
        "type": "state"
      },
      {
        "id": "EB941913257145ECBAAD3E7EF2DB9E4B",
        "title": "British Columbia (Français)",
        "type": "state"
      },
      {
        "id": "16C64EC5B5CA47E18893CCCD521F01A3",
        "title": "Brooks School",
        "type": "organization"
      },
      {
        "id": "84FD9EEF09FA4F289B85410B879EC7E4",
        "title": "Bryant School District",
        "type": "school"
      },
      {
        "id": "33789B1702E34478BB31C872DBB39669",
        "title": "Building 21",
        "type": "school"
      },
      {
        "id": "F20EF104A7ED46838EB9DD3A1652994C",
        "title": "Burwell GNETS",
        "type": "school"
      },
      {
        "id": "24CCB15F3F3848E9A4CB450BAF6D43FF",
        "title": "Butler Traditional High School",
        "type": "school"
      },
      {
        "id": "BAE80926A0674C2C8560EDB840F7D559",
        "title": "CASEL",
        "type": "organization"
      },
      {
        "id": "B389A5B6FF4E4CA3843EC1A3FCA3EA6C",
        "title": "CCHS",
        "type": "school"
      },
      {
        "id": "A41C8B45610A474F9012460136E7977D",
        "title": "CPA Canada",
        "type": "organization"
      },
      {
        "id": "9A44D731383E4775BEAC2C0D96CAFA44",
        "title": "CVO Meise-Jette",
        "type": "school"
      },
      {
        "id": "EA3E507DE9B44F5A9ECCA850627648A9",
        "title": "Calgary Academy",
        "type": "school"
      },
      {
        "id": "B1339AB05F0347E79200FCA63240F3B2",
        "title": "California",
        "type": "state"
      },
      {
        "id": "4CD66FA670574787B151B04578670F6F",
        "title": "Cambridge International Examinations",
        "type": "organization"
      },
      {
        "id": "29329FA028C94963969AD75060A28BCC",
        "title": "Canon Christian Academy",
        "type": "school"
      },
      {
        "id": "324C3B0F78AA4192809F7B19EE1B216B",
        "title": "Canton Preparatory High School",
        "type": "school"
      },
      {
        "id": "64CCDF56D413440EA1EEAFFB88B36AE9",
        "title": "Carmen Schools",
        "type": "school"
      },
      {
        "id": "BA3D38513FAF4F3BABF4F990319E7575",
        "title": "Caroline Chisholm School",
        "type": "school"
      },
      {
        "id": "6E08483CF5CE4EB1B7D670D285F9A933",
        "title": "Centers for Disease Control and Prevention",
        "type": "organization"
      },
      {
        "id": "887AA8A30A8F4244875AEB31C87B5546",
        "title": "Central Columbia School District",
        "type": "school"
      },
      {
        "id": "2AC40BDC5B874406BC03267B47D3A6F3",
        "title": "Centro Educativo Adventista Bilingüe de Costa Rica",
        "type": "school"
      },
      {
        "id": "B8F50FE2B3AC44469EAE9C2E4F2E227C",
        "title": "Character Counts!",
        "type": "organization"
      },
      {
        "id": "A1E6733D492B4B84973D6C693BDCEBD2",
        "title": "Charles E. Smith Jewish Day School",
        "type": "school"
      },
      {
        "id": "0EF6217C068B4B58B11733BC4A976905",
        "title": "Chaska Middle School West",
        "type": "school"
      },
      {
        "id": "D02EA99A8C21497C9D6406402BFDB1D4",
        "title": "Cherry Hill School ",
        "type": "school"
      },
      {
        "id": "B8112FF4BFA14739842D41A3680F4F45",
        "title": "Colby Community College",
        "type": "organization"
      },
      {
        "id": "D894A1A0703141CAB04E4E4BE8236CF4",
        "title": "Colegio Genesis",
        "type": "school"
      },
      {
        "id": "E8195BD4CBC9485BA8FC8118428D6442",
        "title": "Colegio La Fontaine",
        "type": "school"
      },
      {
        "id": "2C9A176C9403480E948699C7EA00E230",
        "title": "Colegio Sagrada Familia Valencia",
        "type": "school"
      },
      {
        "id": "3E074BAB9A474A6EB7ABE0CFE33B9358",
        "title": "Colegio Santa Ursula",
        "type": "organization"
      },
      {
        "id": "3D8B77026A44459786DEA5B4B3130EF5",
        "title": "Colegiul National Gheorghe Lazar Sibiu",
        "type": "school"
      },
      {
        "id": "CF3717379109454F92755D3FB6927538",
        "title": "College and Career Readiness",
        "type": "organization"
      },
      {
        "id": "567D929B095143429D3336BB41F8FBE2",
        "title": "Collège La Nacelle",
        "type": "school"
      },
      {
        "id": "83F29380C23C4AEB843733B243CB2243",
        "title": "Colorado",
        "type": "state"
      },
      {
        "id": "0918E6D0F9114840BF95A0493A245DD8",
        "title": "Common Career Technical Core (CCTC)",
        "type": "organization"
      },
      {
        "id": "67810E9EF6944F9383DCC602A3484C23",
        "title": "Common Core State Standards",
        "type": "state"
      },
      {
        "id": "95D7A9A7CCAC4715BAF26FDB14B5D5B3",
        "title": "Community College Preparatory Academy",
        "type": "organization"
      },
      {
        "id": "E81A1D7D61254B0C986D89EADF992D56",
        "title": "Community Colleges of Colorado - College Composition and Reading 092",
        "type": "organization"
      },
      {
        "id": "C2D26B5D03E74C7B9AFFE6F592601728",
        "title": "Computer Science Teachers Association",
        "type": "organization"
      },
      {
        "id": "EB75643AF771445DA283A0C2923EF630",
        "title": "Computing Technology Industry Association",
        "type": "organization"
      },
      {
        "id": "7ED35031669E470B98EF63BEAD17286D",
        "title": "Connecticut",
        "type": "state"
      },
      {
        "id": "B0894929CC2D4FC4A3A19C905E694ADD",
        "title": "Consejería de educación del Principado de Asturias, España",
        "type": "organization"
      },
      {
        "id": "5DCAC9E8BF44497985EAAD2C310077C3",
        "title": "Consellería de Cultura, Educación e Universidade (Xunta de Galicia, España)",
        "type": "organization"
      },
      {
        "id": "C4C5DEA0343A4C05A3AF9ED88D1E3D59",
        "title": "Council for Exceptional Children",
        "type": "organization"
      },
      {
        "id": "E3A6B6C4DD594DDFAB0413D2AC83170F",
        "title": "Council for Writing Program Administrators ",
        "type": "organization"
      },
      {
        "id": "D9D74C031396455A98500240C5DC357B",
        "title": "Council of Chief State School Officers",
        "type": "organization"
      },
      {
        "id": "F7AAB34E5537472E92C9048955A8F6E9",
        "title": "Cranbrook Kingswood Upper School",
        "type": "school"
      },
      {
        "id": "60CBDED5D8FF4AE2996D8F792FE2464C",
        "title": "Crater Renaissance Academy",
        "type": "school"
      },
      {
        "id": "30DEE171A77D4ED9A3E6B573828BFA39",
        "title": "Crestwood School",
        "type": "school"
      },
      {
        "id": "E61C251872144485897D6E9AB7FB7AE6",
        "title": "Crossroads",
        "type": "school"
      },
      {
        "id": "9FDFB0331F354E7EBB65BFF1B29EBFF9",
        "title": "Culpeper County",
        "type": "school"
      },
      {
        "id": "DFC773D4E8DB4BCC8199578C34CAD584",
        "title": "Culpeper County Public Schools",
        "type": "school"
      },
      {
        "id": "2E0CC9E14F0C40F691F81662F8C82DEB",
        "title": "D2L",
        "type": "organization"
      },
      {
        "id": "9D80AD60AC124E249C93CE24BC12A3F9",
        "title": "Danielson Group",
        "type": "organization"
      },
      {
        "id": "4391EA3250C84205A251B6E1B60295D8",
        "title": "Delaware",
        "type": "state"
      },
      {
        "id": "DDE281BB7ABB4B2B9C1613ADEA446B8C",
        "title": "Delone Catholic High School",
        "type": "school"
      },
      {
        "id": "4B320CE8EA474BFBACB91B927F326960",
        "title": "Des Moines Area Community College",
        "type": "school"
      },
      {
        "id": "A396B14BAB8F447195CDFDD325EAB101",
        "title": "Diocese of Baton Rouge",
        "type": "organization"
      },
      {
        "id": "A6B4F5BDDC594F3F8B4DE1606453ECCE",
        "title": "Diocese of Charleston, SC",
        "type": "school"
      },
      {
        "id": "F1E480355EC748979451A3199A0ACEA8",
        "title": "Diocese of Grand Rapids",
        "type": "organization"
      },
      {
        "id": "DD4C8702BC1542A2B9D4586271A7D5D5",
        "title": "Diocese of Hartford",
        "type": "organization"
      },
      {
        "id": "F13D4C32EC66405084FB48B4399AE593",
        "title": "Diocese of Jefferson City",
        "type": "school"
      },
      {
        "id": "7F8A4F689C6F418CBF049A48ABEFF221",
        "title": "Diocese of Kansas City/St. Joseph",
        "type": "organization"
      },
      {
        "id": "A456416BE4164AE3A24A6A527B2893C5",
        "title": "Diocese of Orlando",
        "type": "school"
      },
      {
        "id": "272D4A7EEED348E4ADF7CF9422723112",
        "title": "Diocese of Phoenix Catholic Schools",
        "type": "organization"
      },
      {
        "id": "A5C1DF532ED44A6CB3D000FD37370C0F",
        "title": "District of Columbia",
        "type": "state"
      },
      {
        "id": "522A383527B04F40AFB79FB5EB073FB7",
        "title": "DoDEA",
        "type": "organization"
      },
      {
        "id": "E2FBFC80D9EE430DBC564463A2058EB8",
        "title": "Dublin Core Metadata Initiative",
        "type": "organization"
      },
      {
        "id": "E3F6108B00A6442893C500D3FB26BB46",
        "title": "Dynamic Learning Maps",
        "type": "organization"
      },
      {
        "id": "60578DC56B0F4111B3802911535EC3DF",
        "title": "EFIZ",
        "type": "organization"
      },
      {
        "id": "142A584FB344427287E9B51DB9DAC46F",
        "title": "Edexcel",
        "type": "organization"
      },
      {
        "id": "3EA89335FCBD4C06B81623F3127CBBE8",
        "title": "Encora",
        "type": "school"
      },
      {
        "id": "2BFD58307F52466B92249B6CFE774C2D",
        "title": "Engineers Canada",
        "type": "organization"
      },
      {
        "id": "4B7A3452D3F040A6BCFF6B80D43B6AFB",
        "title": "English Language Proficiency (ELP) Standards",
        "type": "organization"
      },
      {
        "id": "13555870056A47E89F32EAD28ECB2B36",
        "title": "Equipped for the Future",
        "type": "organization"
      },
      {
        "id": "04B6E8B3016B420BA3ADFA23DB89D877",
        "title": "Essential Elements ",
        "type": "organization"
      },
      {
        "id": "0BCB00FD8266400694D8B8C24D5E6764",
        "title": "Faith Christian School",
        "type": "school"
      },
      {
        "id": "2B886E93052B4D0CB47B43FCB471FCCC",
        "title": "Fife Elementary School",
        "type": "school"
      },
      {
        "id": "B085051251774A13B74285746C1BB9EF",
        "title": "Flint Schools",
        "type": "organization"
      },
      {
        "id": "80B94A122D3D4B95884660FF09CC357E",
        "title": "Florida",
        "type": "state"
      },
      {
        "id": "85B588FB6A1049C083700C42B0C1185C",
        "title": "France Compétences",
        "type": "organization"
      },
      {
        "id": "071023F76B424D9EAB4CCDFE238ED6B7",
        "title": "Francis Marion Intermediate",
        "type": "school"
      },
      {
        "id": "0993669FFD244795A4F9DC8F57F7B4F0",
        "title": "Franklin High School",
        "type": "school"
      },
      {
        "id": "3D0F867B0BB9490084DAE78143ABE0AC",
        "title": "Frederick High School",
        "type": "school"
      },
      {
        "id": "987A679F89FE4673B67D849521A2A6A6",
        "title": "Future Farmers of America",
        "type": "organization"
      },
      {
        "id": "E8661AEEB8AB4A1CB7123FFFF351E609",
        "title": "GED",
        "type": "organization"
      },
      {
        "id": "0E2124BFDFED461B95F677823FD280ED",
        "title": "GO!",
        "type": "organization"
      },
      {
        "id": "2A537CD6A84A4E14B325E556239D198F",
        "title": "Geneva Middle School",
        "type": "school"
      },
      {
        "id": "A89BC072391D44918B85EDD2D5018DD3",
        "title": "Georgetown ISD",
        "type": "organization"
      },
      {
        "id": "AB6E6F50DDF047E8BC3EE2CCFD33DCCC",
        "title": "Georgia",
        "type": "state"
      },
      {
        "id": "90E9303529444652BEF5DC84A6BC6070",
        "title": "Gewerblich-industrielles Bildungszentrum Zug",
        "type": "school"
      },
      {
        "id": "92FE2875762F423B940F329C21D5DF9B",
        "title": "Girl scouts",
        "type": "organization"
      },
      {
        "id": "AF91886562704C9D901242AC4FFD31A0",
        "title": "Glen Lake Community Schools",
        "type": "school"
      },
      {
        "id": "84E8B82C0D0342ABB5366EC4EB037693",
        "title": "Good Start Grow Smart",
        "type": "organization"
      },
      {
        "id": "AA0ABAE558D14AF590FC6F19D8A4D9A3",
        "title": "Gwinnett County Public Schools",
        "type": "organization"
      },
      {
        "id": "9AD14D7259BD4E9086344AC58DC8A9CB",
        "title": "Gwinnett Online Campus",
        "type": "organization"
      },
      {
        "id": "527F6F589F1F440482C7F9A05AE59A97",
        "title": "Hamlin Robinson School ",
        "type": "school"
      },
      {
        "id": "208C5846B268414E9CE4592FA17FD384",
        "title": "Hansberry College Prep",
        "type": "school"
      },
      {
        "id": "64B8E297AAEF42DA886248000B292DF1",
        "title": "Hawaii",
        "type": "state"
      },
      {
        "id": "AE82F3AF308F49258856B9466613671F",
        "title": "Hilton High School",
        "type": "school"
      },
      {
        "id": "918B45D25BD84E579AB2F291110D4C37",
        "title": "Hingham Public Schools",
        "type": "organization"
      },
      {
        "id": "9E98FB0D041F4FAA96BB3DAA43ADCB75",
        "title": "Holy Ghost Catholic School",
        "type": "school"
      },
      {
        "id": "DF4AF4860BF440718C85145FD537E14A",
        "title": "Holy Spirit Catholic School Division",
        "type": "organization"
      },
      {
        "id": "E18BCC4A6F10406BB34904973061D983",
        "title": "Hong Kong Baptist University Affiliated School Wong Kam Fai Secondary and Primary School",
        "type": "school"
      },
      {
        "id": "D92BB182AD0D43DD9A89B5A04C8C8BE4",
        "title": "Horizon School Division K-9",
        "type": "school"
      },
      {
        "id": "1326864C58844F3186BD7C3CC82C1FEA",
        "title": "IC Imagine Public Charter School",
        "type": "organization"
      },
      {
        "id": "383BC447BD4C4A859D4B448BAD2CC693",
        "title": "ICT Essentials",
        "type": "organization"
      },
      {
        "id": "04D275D7BE29486F9DB98751F45D4BAF",
        "title": "IES",
        "type": "organization"
      },
      {
        "id": "AC23485BBA904CBF851DA706FF7DD559",
        "title": "ISTE",
        "type": "organization"
      },
      {
        "id": "E8D078CED3B44AAD956D244FA0E47636",
        "title": "Idaho",
        "type": "state"
      },
      {
        "id": "549159D28465455FB144F5B67F3ACDFF",
        "title": "Illinois",
        "type": "state"
      },
      {
        "id": "0F7091AB177F40D8B71B326CAFD13C8D",
        "title": "Indiana",
        "type": "state"
      },
      {
        "id": "DE2FD79FF67943078F28088410F50486",
        "title": "Ingles primero a sexto básico inglés",
        "type": "organization"
      },
      {
        "id": "7341AD1444C14DCE91B1F149578F6D56",
        "title": "Institute for Catholic Education",
        "type": "organization"
      },
      {
        "id": "6C108E8EC1944844B15FEFE71337CFB6",
        "title": "International Baccalaureate",
        "type": "organization"
      },
      {
        "id": "005485F662EE4BBA8D174499A53F9DE4",
        "title": "International School of Port of Spain",
        "type": "school"
      },
      {
        "id": "5F8C648A93994FC395BD1A67CE8A1C39",
        "title": "International School of the Gothenburg Region",
        "type": "school"
      },
      {
        "id": "EC07EA64CD834C2B97F2A54AB80DB89B",
        "title": "International Technology and Engineering Educators Association",
        "type": "organization"
      },
      {
        "id": "F5B940AC903E49A2817B9FCF1CD34EE8",
        "title": "Interstate School Leaders Licensure Consortium",
        "type": "organization"
      },
      {
        "id": "78D8430CBE88474FAB3CDAAD9094C961",
        "title": "Iowa",
        "type": "state"
      },
      {
        "id": "E38883A4F4954F7A875A290E3B135D1F",
        "title": "Itchen College",
        "type": "organization"
      },
      {
        "id": "517FA0FCFD4D415BB940770B5BAA30C2",
        "title": "Jamaica",
        "type": "organization"
      },
      {
        "id": "B15A0D5520FD454EBD97D98688EE29DF",
        "title": "Jose Maria Caceres",
        "type": "school"
      },
      {
        "id": "22534454CF994FF1B3A67EB930C782A5",
        "title": "Jump$tart Coalition for Personal Financial Literacy",
        "type": "organization"
      },
      {
        "id": "50CA76B6DED64CCBB5364E13E1ED9475",
        "title": "K12 Inc.",
        "type": "corporation"
      },
      {
        "id": "3D2A9582BF3D4118B30AAD2DF9A183D1",
        "title": "Kansas",
        "type": "state"
      },
      {
        "id": "B51C61DD18264405B2C7437DE45B3631",
        "title": "Katholiek Onderwijs Vlaanderen ",
        "type": "organization"
      },
      {
        "id": "7A0BB015E02A46DD99A6D91ECD64DBE3",
        "title": "Kennesaw State University",
        "type": "organization"
      },
      {
        "id": "46C7F759B14D4334A1CD073B03B9BB7C",
        "title": "Kentucky",
        "type": "state"
      },
      {
        "id": "5D6FCAF761E644CBB0CB6B1C0134A994",
        "title": "Key Stage 3 Science National Curriculum (UK)",
        "type": "organization"
      },
      {
        "id": "0B44432B82094CC2A0DAB1FD474D4324",
        "title": "LJCDS",
        "type": "organization"
      },
      {
        "id": "6E9D5262BDA14B189B3F27C667ED8AA3",
        "title": "La Molina Christian Schools",
        "type": "school"
      },
      {
        "id": "07581EE3E333471FB943860FC346735E",
        "title": "Lakefield College School",
        "type": "school"
      },
      {
        "id": "224F4CB37FAF4DBAA3EC8A7465EFC020",
        "title": "Laureate International Universities",
        "type": "organization"
      },
      {
        "id": "D5466CBCD52E4BF7BAE427BA7207359A",
        "title": "Laurel-Concord-Coleridge School",
        "type": "school"
      },
      {
        "id": "CB6B4948647149C1811A3FC7E7D3F597",
        "title": "Laurent Clerc National Deaf Education Center",
        "type": "organization"
      },
      {
        "id": "BC9595FAA7E04BC1BF9A5BF10DB12072",
        "title": "Learning Outcomes Framework (Malta)",
        "type": "organization"
      },
      {
        "id": "F87C08F9BFCD4D42AD540ABFA4E61AE1",
        "title": "Lebanese curricula",
        "type": "school"
      },
      {
        "id": "055CF30B5BBC48249778D64AE37F503D",
        "title": "Lehrplan für den katholischen Religionsunterricht an der Volksschule Österreich",
        "type": "organization"
      },
      {
        "id": "7E9BEE28B98D4EB29D34206CB7AAF411",
        "title": "Lewisburg Elementary School - KY",
        "type": "school"
      },
      {
        "id": "4CC80CA5A64C4C1CA86246F917AD59C7",
        "title": "Lighthouse Community Charter School ",
        "type": "school"
      },
      {
        "id": "05A6F11124B74C6C9F7A3AB5AD20EBA7",
        "title": "Linn-Mar CSD",
        "type": "school"
      },
      {
        "id": "2E50BC02DF164C62A608C69EB5564A05",
        "title": "Lipscomb Academy",
        "type": "school"
      },
      {
        "id": "4EDDED4DAADD404DAB7CE05FA2CCF450",
        "title": "Littleton Elementary School District",
        "type": "school"
      },
      {
        "id": "7F61743375274952B3D2ED9C4182ED53",
        "title": "Louisiana",
        "type": "state"
      },
      {
        "id": "AA8A6C358F544FB1809CDDD1CF37BCB8",
        "title": "Lycée Monte-Cristo ",
        "type": "school"
      },
      {
        "id": "A8DBFA7C17FC47F2A3806BC32E4CA376",
        "title": "MHA",
        "type": "organization"
      },
      {
        "id": "AAA483AFFF5046569C65BC71326D6C67",
        "title": "MIUR",
        "type": "organization"
      },
      {
        "id": "99301CAF70794BBCA568186C479A5DFC",
        "title": "Maine",
        "type": "state"
      },
      {
        "id": "C03ED83E5FEE4F40BDAB93C18811795D",
        "title": "Manchester School District",
        "type": "school"
      },
      {
        "id": "0C92C08A87AA4EBEBC6D7408AEFBFEBB",
        "title": "Manitoba",
        "type": "state"
      },
      {
        "id": "E92E49D6BA794F1EB4897C9C46C57477",
        "title": "Manitoba Education",
        "type": "organization"
      },
      {
        "id": "49FCDFBD2CF04033A9C347BFA0584DF0",
        "title": "Maryland",
        "type": "state"
      },
      {
        "id": "E9BA502D896A4E338D7FF43BED4A6356",
        "title": "Maryland School for the Deaf",
        "type": "school"
      },
      {
        "id": "95C543B18A1B473B894ED35ECA322576",
        "title": "Massachusetts",
        "type": "state"
      },
      {
        "id": "D13175A33AA84BF4951EF5256740095F",
        "title": "Mesa Public School District",
        "type": "school"
      },
      {
        "id": "778458DAC3234C428E022B08ADF179C3",
        "title": "Michigan",
        "type": "state"
      },
      {
        "id": "B11BF3E6D2DC48589DC5A38EC7F818A0",
        "title": "Middletown Area School District",
        "type": "school"
      },
      {
        "id": "C7074373E05C4289AB91A0E296CF92D9",
        "title": "Milwaukee High School of the Arts",
        "type": "school"
      },
      {
        "id": "7B726D85FE524AB2AB0F80FB7AF46F5E",
        "title": "Ministerio de educacion Chile",
        "type": "organization"
      },
      {
        "id": "6C32865DCDF64F859D115147527E2D5A",
        "title": "Ministero dell’Istruzione, dell’Università e della Ricerca",
        "type": "organization"
      },
      {
        "id": "B632FB4B1B83445AA8DB46DC3F079D19",
        "title": "Minnesota",
        "type": "state"
      },
      {
        "id": "78D64C532B604AC7BC15E6578C381017",
        "title": "Mississippi",
        "type": "state"
      },
      {
        "id": "175A144B44F94BFAB539F3B571A3A62C",
        "title": "Missouri",
        "type": "state"
      },
      {
        "id": "7FAA3E0A782B498DB5E5EA255681706C",
        "title": "Montana",
        "type": "state"
      },
      {
        "id": "78AAB65E646340B5A31A2E9CAD22D1B7",
        "title": "Moravia Community Schools",
        "type": "school"
      },
      {
        "id": "88D7AABEC6C64B3F9F5D05A597EC1BF6",
        "title": "Morrison Academy",
        "type": "organization"
      },
      {
        "id": "1E9BAB19FAF64FD09446BFB77FD230A3",
        "title": "Mountain Brooks Schools",
        "type": "school"
      },
      {
        "id": "B62D92E35B4D47CE85828D61612A7F91",
        "title": "MsBoom Denbrandt",
        "type": "school"
      },
      {
        "id": "B52B184A89E44375AD2E19CA693B443F",
        "title": "Murray Hill Middle School",
        "type": "school"
      },
      {
        "id": "665E303A6BC843E796EE139CDB1CD27D",
        "title": "Murtoa College",
        "type": "school"
      },
      {
        "id": "EAF147E438ED40C7B7C109B9DD7D2717",
        "title": "NAfME",
        "type": "organization"
      },
      {
        "id": "8E5E4C31C2884785B9DD848635E85AC2",
        "title": "NCCA",
        "type": "organization"
      },
      {
        "id": "7E694B94917F40D49BCAA2376586884A",
        "title": "NCTE/IRA",
        "type": "organization"
      },
      {
        "id": "40BC61203EA442CC9052F7A612FFC3DA",
        "title": "NOBLE CHARTER SCHOOLS",
        "type": "school"
      },
      {
        "id": "563991732FA34ABDA19DEDF23863BE6D",
        "title": "NSW Board of Studies",
        "type": "organization"
      },
      {
        "id": "603D4BDBEB184E539F47223042032D1D",
        "title": "NSW Education Standards Authority (NESA)",
        "type": "organization"
      },
      {
        "id": "FE949072330C4502A244F01F3BF45617",
        "title": "National Assessment Governing Board",
        "type": "organization"
      },
      {
        "id": "8F59164C625544B8B084E9D33A177B81",
        "title": "National Association for Gifted Children",
        "type": "organization"
      },
      {
        "id": "09B8F8E13DB742BFB22C9FCAAC3EAFD2",
        "title": "National Association for Gifted Children",
        "type": "organization"
      },
      {
        "id": "C089275B3D474B7F891C9AD5D4696495",
        "title": "National Association of Pastoral Musicians ",
        "type": "organization"
      },
      {
        "id": "E2FE94A450A646FF935C27B0EC868E48",
        "title": "National Association of State Administrators of Family and Consumer Sciences",
        "type": "organization"
      },
      {
        "id": "C66CB186BF744317989EF764E4EDA75A",
        "title": "National Business Education Association",
        "type": "organization"
      },
      {
        "id": "E56CB6BEFA664E86884DB130A2C4458E",
        "title": "National Center for History in the Schools",
        "type": "organization"
      },
      {
        "id": "8FDC4AFCD574434DBA59741707517173",
        "title": "National Coalition for Core Arts Standards",
        "type": "organization"
      },
      {
        "id": "6BE720E8A4C646EF9CD05441ED940875",
        "title": "National Consortium for Health Science Education",
        "type": "organization"
      },
      {
        "id": "2F48212D5B0F4352805BD0D1A9911263",
        "title": "National Council for Agricultural Education",
        "type": "organization"
      },
      {
        "id": "B93E61C2A9784FB5B8E7D086E78913B9",
        "title": "National Council for Geographic Education",
        "type": "organization"
      },
      {
        "id": "63B92F2164654D019589410B6CA225EA",
        "title": "National Council for the Social Studies",
        "type": "organization"
      },
      {
        "id": "823708C7149D46A0BDC265B88F1AD4C9",
        "title": "National Council of Teachers of Mathematics",
        "type": "organization"
      },
      {
        "id": "88FC6D1203F64635AD6D8F483E5C78A5",
        "title": "National Council on Economic Education",
        "type": "organization"
      },
      {
        "id": "9ED6EE05BCBC40B6BF4429214D647B95",
        "title": "National Cryptologic Museum Foundation ",
        "type": "organization"
      },
      {
        "id": "E0058BE4809A4E5A9D06EB70F4E446C9",
        "title": "National Curriculum 2014 (UK)",
        "type": "organization"
      },
      {
        "id": "F9529A01965A44A5B737E3899E23CB61",
        "title": "National Film Study Standards",
        "type": "organization"
      },
      {
        "id": "D7D79D9E152A47808D826D3DD37149E8",
        "title": "National Fire Protection Association",
        "type": "organization"
      },
      {
        "id": "6636E00751DC45F09DB863381C757EA1",
        "title": "National Geography Education Standards",
        "type": "organization"
      },
      {
        "id": "A66ADAD3FB044D2F9B81C67CE1C6E7C3",
        "title": "National Health Education Standards",
        "type": "organization"
      },
      {
        "id": "709C52A498C543AF8EDA3E8351E0E599",
        "title": "National Institute for Metalworking Skills",
        "type": "organization"
      },
      {
        "id": "AC098A752EBD43D98A7509152EDE5404",
        "title": "National Policy Board for Educational Administration",
        "type": "organization"
      },
      {
        "id": "0FC33CADD3774E1188080D4AF29970E0",
        "title": "National Research Council",
        "type": "organization"
      },
      {
        "id": "A0F77001728F4F75BE21EB8B8F6FA5AC",
        "title": "National Restaurant Association",
        "type": "organization"
      },
      {
        "id": "F86F10DA863648449139695300E8889F",
        "title": "National Science Education Standards",
        "type": "organization"
      },
      {
        "id": "FD1A7DDBE25541A0AA349AD629D69186",
        "title": "National Standards for Arts Education",
        "type": "organization"
      },
      {
        "id": "ABA1693C490E4353B9D41F61EDB6A342",
        "title": "National Standards for Civics and Government",
        "type": "organization"
      },
      {
        "id": "528BFA6873DF4F4D97AF40A3842D34B9",
        "title": "Nativity Catholic School",
        "type": "school"
      },
      {
        "id": "12FDD9CA15FC49259C2EF4BB13D59D2F",
        "title": "Nebraska",
        "type": "state"
      },
      {
        "id": "A7F156ECF40D4DFDB9DE1E3541550B20",
        "title": "Nevada",
        "type": "state"
      },
      {
        "id": "37B4CB5A0A9F45E68D3612D8AD12B64E",
        "title": "New Albany High School",
        "type": "school"
      },
      {
        "id": "4195BB03E05C4126BC12C809D3B86342",
        "title": "New Boston High School",
        "type": "school"
      },
      {
        "id": "02B8EEED5A324CADA1DCE93E3F5A06C4",
        "title": "New Brunswick (Français)",
        "type": "state"
      },
      {
        "id": "46115D815A5E41C185AAE63E7B3E4F83",
        "title": "New Hampshire",
        "type": "state"
      },
      {
        "id": "BD9F1823F64844E38377E11EB39F173B",
        "title": "New Jersey",
        "type": "state"
      },
      {
        "id": "C558A97651934F3989D0D0A41196060C",
        "title": "New Mexico",
        "type": "state"
      },
      {
        "id": "195925C71069484F9EBC8202DF6C5FF7",
        "title": "New Mexico School for the Deaf",
        "type": "school"
      },
      {
        "id": "DA1743190A534CB0AEC12F494BE1F8D7",
        "title": "New York",
        "type": "state"
      },
      {
        "id": "E986B92AC48444E7997C2CBD2A0FD9E2",
        "title": "New York City",
        "type": "school"
      },
      {
        "id": "66D464B36D28478DB099F2933AF0DFEC",
        "title": "New Zealand",
        "type": "country"
      },
      {
        "id": "79BF7071907541C3943825B4E73860DD",
        "title": "New Zealand Qualifications Authority",
        "type": "organization"
      },
      {
        "id": "D93BABAA03D84EA588A8907D60B53D03",
        "title": "Newfoundland and Labrador",
        "type": "state"
      },
      {
        "id": "6A182AB452A54243AB6A9A8363B57CF1",
        "title": "Newington Public Schools",
        "type": "school"
      },
      {
        "id": "71E5AA409D894EB0B43A8CD82F727BFE",
        "title": "Next Generation Science Standards",
        "type": "organization"
      },
      {
        "id": "4CD84939754E4CAFB661CE3BFCF81FDE",
        "title": "Noble Schools",
        "type": "organization"
      },
      {
        "id": "CE65E25538B2419E98D98A2BCA407145",
        "title": "Noble Street College Prep",
        "type": "organization"
      },
      {
        "id": "8A257771396B4F0792EB9D6020CC9089",
        "title": "North Carolina",
        "type": "state"
      },
      {
        "id": "071477629D00405286BC6D79576AAB79",
        "title": "North Dakota",
        "type": "state"
      },
      {
        "id": "247FA40FE8DA4B4CA6437E8BF88711A4",
        "title": "North Powder Charter School",
        "type": "school"
      },
      {
        "id": "9E050AB464E341CF817B399EB06AC1AA",
        "title": "Northbrook Junior High",
        "type": "school"
      },
      {
        "id": "AE0DD400C98144D79A0E158A67A9A10B",
        "title": "Nova Scotia",
        "type": "state"
      },
      {
        "id": "FBAACD7D4A2645A8AD1497A99E8828E8",
        "title": "Oakland Unified School District",
        "type": "school"
      },
      {
        "id": "1B006C651DFC472EB710158D7706CABA",
        "title": "Office of Overseas Schools U.S. Department of State",
        "type": "organization"
      },
      {
        "id": "3040C84D832840D4A33B85A659D79408",
        "title": "Office of Vocational and Adult Education",
        "type": "organization"
      },
      {
        "id": "F4CB2B5DF6904071BBCC671A3AB783B8",
        "title": "Ohio",
        "type": "state"
      },
      {
        "id": "39FE6BDC03A5471F877A3A0048638B13",
        "title": "Oklahoma",
        "type": "state"
      },
      {
        "id": "F3E17BE732C6414D8E739D6AB808EC84",
        "title": "Olathe Public Schools",
        "type": "school"
      },
      {
        "id": "B6AA8AC483B949F0B4198062C61A61AD",
        "title": "Ontario",
        "type": "state"
      },
      {
        "id": "BD93EE4E228B40CE90D2DDB93FE1E750",
        "title": "Ontario",
        "type": "organization"
      },
      {
        "id": "6C1C46EAB3F345D78085A548AF831FB8",
        "title": "Ontario (Français)",
        "type": "state"
      },
      {
        "id": "A250040D3A2743FEBE45552F2D3F24F9",
        "title": "Ontario - français",
        "type": "organization"
      },
      {
        "id": "64E138FA4ADE4BFCAB5EFA937AF9738A",
        "title": "Opheim Schools",
        "type": "school"
      },
      {
        "id": "3C4329D21BCF435C880282CBAAE12AF1",
        "title": "Oregon",
        "type": "state"
      },
      {
        "id": "54C9586596364451934B1C2F93A3E048",
        "title": "Oregon Episcopal School",
        "type": "school"
      },
      {
        "id": "1C55A2E815DA4C7EB97284AC7B395F45",
        "title": "Otago Girls' High School",
        "type": "school"
      },
      {
        "id": "65A63A80F5FD4254B1489DBC5EE0EF4A",
        "title": "Our Lady of Mt. Carmel",
        "type": "school"
      },
      {
        "id": "7B733163E4EA4BC6BFB153AE0375A7B0",
        "title": "Oxford, Cambridge and CSR",
        "type": "organization"
      },
      {
        "id": "BC0345CEA9D9475C9FE9E7B33629D8C2",
        "title": "Oxford, Cambridge and RSA",
        "type": "organization"
      },
      {
        "id": "9B074683BCEE454A86979A666F9BB0DB",
        "title": "P.B. Ritch Middle School",
        "type": "school"
      },
      {
        "id": "2098C66CA9C24E57B73C9F589FBD9947",
        "title": "Packer Collegiate Institute",
        "type": "organization"
      },
      {
        "id": "BCF9ADF0A79A4826B4D40FC8C7901EB0",
        "title": "Painesville City Local Schools",
        "type": "school"
      },
      {
        "id": "D1A5754EDB594BB7BA92EF92BC55EDC4",
        "title": "Partnership for 21st Century Skills",
        "type": "organization"
      },
      {
        "id": "5A99211C6D874994A2CFEE2AE40023DD",
        "title": "Pennsylvania",
        "type": "state"
      },
      {
        "id": "F962108F71484DC7815C0AD40CD9DF8E",
        "title": "Pickens County Career & Technology Center",
        "type": "school"
      },
      {
        "id": "BCEAF2F8C2F64B6CAAFB538F1D5437A6",
        "title": "Plainview ISD",
        "type": "school"
      },
      {
        "id": "281AD74A2C7C4FCB831C8B0AB1BB82A5",
        "title": "Portland Public Schools",
        "type": "school"
      },
      {
        "id": "63E3CC8414C6490FA3CE0184B071AC7E",
        "title": "Praktiska gymnasiet AB Jönköping",
        "type": "organization"
      },
      {
        "id": "B02D36DA42744BB2B5F44B0B0333482D",
        "title": "Precision Exams",
        "type": "organization"
      },
      {
        "id": "DFC0FECDEB144EDF8C040F4BEBA77BFB",
        "title": "Precision Exams by YouScience",
        "type": "organization"
      },
      {
        "id": "F0022532C2004AA18AC4F93DACA498BB",
        "title": "Proficiency Standards System",
        "type": "organization"
      },
      {
        "id": "2331593CD8714C9C8C1FDA8C963BF659",
        "title": "Proficiency Standards System",
        "type": "organization"
      },
      {
        "id": "BC21751D74764127A5C907D278D7542D",
        "title": "Project Lead The Way",
        "type": "organization"
      },
      {
        "id": "7D8B4BDD483F4AF09228D2683D04C521",
        "title": "Puropellon koulu",
        "type": "school"
      },
      {
        "id": "6DFC07D0F0E94A259BA0088B58546BAA",
        "title": "Quebec (English)",
        "type": "state"
      },
      {
        "id": "021B3028C6E44063ACA4283E4D899F72",
        "title": "Québec (Français)",
        "type": "state"
      },
      {
        "id": "98233B6C229A4CC695A1A48E073E7288",
        "title": "RSU24",
        "type": "school"
      },
      {
        "id": "81343747C52448ABBDF9883723A9B216",
        "title": "Red Hill Lutheran",
        "type": "school"
      },
      {
        "id": "C9BA480B6BC8449592274E47979164C4",
        "title": "Renaissance - Sociology Standards",
        "type": "school"
      },
      {
        "id": "9E49154668C34A39B1B59DC7D62800AF",
        "title": "República Dominicana",
        "type": "organization"
      },
      {
        "id": "DF744137625E49979D5F1E1495FB7E6E",
        "title": "República de Austria",
        "type": "school"
      },
      {
        "id": "68A21E90B5634DC9ACBE78DA6E12D54C",
        "title": "Revere High School",
        "type": "school"
      },
      {
        "id": "D91DD2FDBCC94DC1869871FD1C0F2665",
        "title": "Rhode Island",
        "type": "state"
      },
      {
        "id": "C8FCB3AAECEF4361BD36EF9063146ED0",
        "title": "Rising Tide Charter Public School",
        "type": "organization"
      },
      {
        "id": "3A59FE8857AE4B36B8D0CD5C22CA4F2B",
        "title": "Rockford SD 205",
        "type": "organization"
      },
      {
        "id": "2AE6665D8C90452E9E452B493F4F860D",
        "title": "Rocky Mountain College",
        "type": "school"
      },
      {
        "id": "25AFABBAB75C47A187C2BEC433B7B8ED",
        "title": "Roman Catholic Diocese of Joliet Illinois",
        "type": "organization"
      },
      {
        "id": "EB26698C98434668A5029C6B1A7F193D",
        "title": "SD48 Sea to Sky",
        "type": "organization"
      },
      {
        "id": "478C60610B0B40DD987362465A06CBC7",
        "title": "SHAPE America ",
        "type": "organization"
      },
      {
        "id": "D48BF49EB2BA4B73BB705CD910AE912B",
        "title": "SLO",
        "type": "organization"
      },
      {
        "id": "D504A180990545328A5BB3B3B49F4AB7",
        "title": "Saigon South International School",
        "type": "school"
      },
      {
        "id": "39F74FBC1F4F4B3E87698892A56965F9",
        "title": "Saint Joseph Catholic School",
        "type": "school"
      },
      {
        "id": "A85F45C68BFC4994AC430356A38B91BD",
        "title": "Sandy Creek High School ",
        "type": "school"
      },
      {
        "id": "6D8D86ACC927428CA534663D64124C00",
        "title": "Santa Fe South High School",
        "type": "school"
      },
      {
        "id": "53B6A52587004025863E9CDAB4D2EE9F",
        "title": "Saskatchewan",
        "type": "state"
      },
      {
        "id": "E9BC3E6E789F42EAA0B6A4D23E4A9C93",
        "title": "Savio College",
        "type": "school"
      },
      {
        "id": "ED1D233D450948A09E6E145FE5B10E86",
        "title": "School Curriculum and Standards Authority (Western Australia)",
        "type": "organization"
      },
      {
        "id": "3D9FDBF4B2A04DC8B57EDC210E329D17",
        "title": "School Curriculum and Standards Authority (Western Australia)",
        "type": "organization"
      },
      {
        "id": "473C760F588E4D949F2BEE2CCB07C1F6",
        "title": "Schule Fällanden",
        "type": "organization"
      },
      {
        "id": "500EEFD8178D4CF3A7613560E774084C",
        "title": "Scotland",
        "type": "nation"
      },
      {
        "id": "D16ADCD6FB104364834BE311AA6E7EED",
        "title": "Search Institute",
        "type": "organization"
      },
      {
        "id": "D512F9F319FB4EFAB0CB0D7737588202",
        "title": "Segec - Belgique",
        "type": "organization"
      },
      {
        "id": "7F3952E8000D4674AE88C5881000ABFE",
        "title": "Seneca Non-Public Schools",
        "type": "school"
      },
      {
        "id": "FBA646AF23904B2D8718F78399A26FFD",
        "title": "Seoul Foreign British School",
        "type": "school"
      },
      {
        "id": "A1B6E1EF48B54B608FC06DD2FF48C607",
        "title": "Sequoia Union High School",
        "type": "school"
      },
      {
        "id": "84B7A6BAA3D94177AAD67A04497E4AE1",
        "title": "Sequoia Union High School District",
        "type": "school"
      },
      {
        "id": "FB7275C6F2E34E208599BA5CE9A4A92C",
        "title": "Sequoyah School",
        "type": "school"
      },
      {
        "id": "8CB578043CA1427D92E95C020301B3D9",
        "title": "Sexsmith Secondary School",
        "type": "school"
      },
      {
        "id": "B40A32EC8B1B4C8EAF4B2F557196B9BE",
        "title": "Shenendehowa Central School District",
        "type": "organization"
      },
      {
        "id": "B55C12978EBD418F86CE2014EFF4588A",
        "title": "Sherwood Elementary ",
        "type": "school"
      },
      {
        "id": "3D05F3E36D0543ED90B83B50AE627807",
        "title": "Sir William Borlase's Grammar School",
        "type": "school"
      },
      {
        "id": "6CB0D2D7ED4947C3859D0F8EA42A92DE",
        "title": "Skagit Adventist Academy",
        "type": "school"
      },
      {
        "id": "8923AA58EAFE44DDB602D832B2095B2A",
        "title": "Society of Health and Physical Educators",
        "type": "organization"
      },
      {
        "id": "033B7F9D29D84F09AF312E83F31AE348",
        "title": "South Carolina",
        "type": "state"
      },
      {
        "id": "2A3604CDDF8241DC82059FFBC308E74F",
        "title": "South Dakota",
        "type": "state"
      },
      {
        "id": "9AE452E7A1694EFCA63FE2F66C63E476",
        "title": "Southridge School",
        "type": "school"
      },
      {
        "id": "435B39603C684724B759AAEBDD1B509B",
        "title": "St-Ignatius School",
        "type": "school"
      },
      {
        "id": "D5DF5F3FE8D94BDCBB459F549B9FBA7D",
        "title": "St. Anthony",
        "type": "school"
      },
      {
        "id": "49474107B0504772A4F5B8B641B095F6",
        "title": "St. Catherine Catholic School - CA",
        "type": "school"
      },
      {
        "id": "E470C25E041740138EEC8D1E23801EA8",
        "title": "St. John Francis Regis",
        "type": "school"
      },
      {
        "id": "4ED4297E34804432B45DC53BDDBD1181",
        "title": "St. Mary School",
        "type": "school"
      },
      {
        "id": "6E9A9226D7054BCEAF688F2AAB2445A9",
        "title": "St. Michael School",
        "type": "school"
      },
      {
        "id": "8780A2523B5E4DCFB5B813BD635F485A",
        "title": "St. Paul the Apostle",
        "type": "school"
      },
      {
        "id": "21470BDAE2EE4BCDB1C1F1BC9C78B2E2",
        "title": "St.Philips the Apostle Catholic School",
        "type": "school"
      },
      {
        "id": "BD88859F5F8246F199936B62DD2926F7",
        "title": "Standards Aligned System (SAS)",
        "type": "organization"
      },
      {
        "id": "7BEB546D409340C2828CAD7ADFE4FE44",
        "title": "Still Creek Christian Academy",
        "type": "school"
      },
      {
        "id": "E5C475D6241A494582FC636F11097670",
        "title": "Surrey School District (No 36)",
        "type": "school"
      },
      {
        "id": "384F8EE9268A411F80133A6C6D3CFA61",
        "title": "Switzerland",
        "type": "organization"
      },
      {
        "id": "6783CBB8A3B844E7BA7CE51E1F3453DC",
        "title": "Switzerland",
        "type": "organization"
      },
      {
        "id": "26D72B3F184E4DFF951AEC04B2408BA6",
        "title": "TYAS",
        "type": "school"
      },
      {
        "id": "D438C750B05748E68D231E9B0F0F736B",
        "title": "Teacher Created Amplify",
        "type": "organization"
      },
      {
        "id": "D1B5D36EF20F419B9504B7225286DBFD",
        "title": "Teachers' Democracy Project",
        "type": "organization"
      },
      {
        "id": "8755E0D33C7343E7A6DAF9FBB6515633",
        "title": "Teaching Strategies for Early Childhood",
        "type": "organization"
      },
      {
        "id": "B1BF1726D3C24724B651FC3EB2394634",
        "title": "Teaching Tolerance",
        "type": "organization"
      },
      {
        "id": "B2B0F6CE752249EF832AC07D55AE813C",
        "title": "Teaching Tolerance - Valiente College Prep",
        "type": "organization"
      },
      {
        "id": "180878796A3C448D808F38BCCCFD26CF",
        "title": "Tennessee",
        "type": "state"
      },
      {
        "id": "28903EF2A9F9469C9BF592D4D0BE10F8",
        "title": "Texas",
        "type": "state"
      },
      {
        "id": "E26B72877D5F46719A4C631A5158232C",
        "title": "The American School. of Tampico",
        "type": "organization"
      },
      {
        "id": "1F4971F0801A485CAAC77B0657E4C544",
        "title": "The Cardinal Newman Society",
        "type": "organization"
      },
      {
        "id": "17323662B7F74FAC8FA82DC59410C295",
        "title": "The Cardinal Newman Society",
        "type": "organization"
      },
      {
        "id": "89E5259B77244F209976236EC0CB4F65",
        "title": "The Graham School ",
        "type": "organization"
      },
      {
        "id": "41B1848DE02B4357B2700E6C1C42611F",
        "title": "The Urban Assembly Maker Academy",
        "type": "school"
      },
      {
        "id": "9EB2FDD346B94DD685B256E339EE5CA1",
        "title": "Thomas County School District",
        "type": "school"
      },
      {
        "id": "6C17C0982BA441209E7ED06B14220D14",
        "title": "Track n' Growth",
        "type": "organization"
      },
      {
        "id": "D92CA1B89A9343C593900CCE8CE8FFE6",
        "title": "USCCB",
        "type": "organization"
      },
      {
        "id": "392F54C639B746FEB9C41BC286B9D1E5",
        "title": "USCIS",
        "type": "organization"
      },
      {
        "id": "3B1FE9AD4508437AB4EE40CAC44AB869",
        "title": "Undheim skule",
        "type": "school"
      },
      {
        "id": "89288B71914A4E7DB801017909AFCB26",
        "title": "Union Grove High School",
        "type": "school"
      },
      {
        "id": "73E7187D3910423085A2439AE9C9A64F",
        "title": "Unity Concord International School",
        "type": "school"
      },
      {
        "id": "60367B5E895B456DAC05F40C9D98D68F",
        "title": "University Track Preparation",
        "type": "school"
      },
      {
        "id": "3ED93443BCEF4418A184A1EF59DCC1CD",
        "title": "University of Hawai'i",
        "type": "school"
      },
      {
        "id": "593165F09CF44914B04F244DED2A920A",
        "title": "University of San Francisco",
        "type": "school"
      },
      {
        "id": "178982A93FED4D9186E0AC6A740682D9",
        "title": "Utah",
        "type": "state"
      },
      {
        "id": "054E222616AC4EB9A959E23D7C26064A",
        "title": "VILLA MARIA ACADEMY",
        "type": "school"
      },
      {
        "id": "587F7E0F9875495DB02EF7F3E5BF00DA",
        "title": "Vermont",
        "type": "state"
      },
      {
        "id": "46B2191930FE47AC93A2BD710924AC4B",
        "title": "Victorian Curriculum (Australia)",
        "type": "organization"
      },
      {
        "id": "27D1AF28D2F54DD3A69C057DDA772BD0",
        "title": "Virginia",
        "type": "state"
      },
      {
        "id": "0D9ED4E476834A32A654C900450BECBA",
        "title": "WIDA",
        "type": "organization"
      },
      {
        "id": "AA30E015BED24CE0A37F5689230FA1CD",
        "title": "WOTP",
        "type": "organization"
      },
      {
        "id": "5802DA914078408EA307A4275A5F4312",
        "title": "Waseca Public Schools",
        "type": "organization"
      },
      {
        "id": "7432D25024594EA9A2092DF45BBA7F6C",
        "title": "Washington",
        "type": "state"
      },
      {
        "id": "3B3B0F0BB67347CB852CEF51D53B19AC",
        "title": "Wayland Academy",
        "type": "school"
      },
      {
        "id": "D3C920B40A4640D4AB1F4609198C15B1",
        "title": "WebJunction",
        "type": "organization"
      },
      {
        "id": "3590806964604D1F89B87E23B958F5F8",
        "title": "Webb's Depth of Knowledge Levels",
        "type": "organization"
      },
      {
        "id": "8F5A3AE6516C44E28C6C9B8AE0B17FE3",
        "title": "Wells Middle School",
        "type": "school"
      },
      {
        "id": "98C6E2674FFF4EAB92DE5DA3E8F1618A",
        "title": "Wendell Phillips Academy High School",
        "type": "school"
      },
      {
        "id": "F1D13BFFB41F4FC6B4D6132D1B6792F7",
        "title": "West Virginia",
        "type": "state"
      },
      {
        "id": "FA9A4C52379C4D128B2A8132E3E9D39A",
        "title": "Western Springs D101 - IL",
        "type": "school"
      },
      {
        "id": "A15C1B785B0A404AA077891200F98821",
        "title": "Western Springs School District 101",
        "type": "school"
      },
      {
        "id": "8CB51CA4CF304E61A5D6F933CF76050E",
        "title": "Westminster Christian Academy",
        "type": "organization"
      },
      {
        "id": "32E4E0DECEBD4404B03052C6F528EBB1",
        "title": "Westside High School",
        "type": "school"
      },
      {
        "id": "47D3FE33B57E476AA8946ED1CA936F1A",
        "title": "Wichita Public Schools",
        "type": "school"
      },
      {
        "id": "B29E42E8C9F0400781A84F5BE568EFEA",
        "title": "Will C Wood High School",
        "type": "school"
      },
      {
        "id": "745124D969E9491C9FC33D3235259386",
        "title": "Wisconsin",
        "type": "state"
      },
      {
        "id": "94810BC9A26A4622847D9DF546A375AF",
        "title": "Woodbridge Senior High School",
        "type": "school"
      },
      {
        "id": "7066B0D15CF842CDBB02643654BC9EE9",
        "title": "World Meteorological Organization",
        "type": "organization"
      },
      {
        "id": "744704BE56D44FB9B3D18B543FBF9BCC",
        "title": "Wyoming",
        "type": "state"
      },
      {
        "id": "30709AA9918A4F7CA9F2EF78DC843A43",
        "title": "Xiehe ",
        "type": "organization"
      },
      {
        "id": "EAE6012346E54B9BBA9D5824B2DC0074",
        "title": "Yorkville CUSD #115",
        "type": "school"
      },
      {
        "id": "5AB82863539247908954B855031AAA97",
        "title": "Zeeland West High School",
        "type": "school"
      },
      {
        "id": "E28297163B2645B0890A05A2FB9ACE6D",
        "title": "Základní škola Měcholupy",
        "type": "school"
      },
      {
        "id": "C78BAF168FDE49A284F5B02870527D7B",
        "title": "eEducation11_Gruppenarbeit",
        "type": "school"
      },
      {
        "id": "FBCB7ABB7E1E43B181512E3B33761975",
        "title": "iKeepSafe",
        "type": "organization"
      },
      {
        "id": "4D2479B8ED6B4C02859D4C76965CA584",
        "title": "svwo",
        "type": "organization"
      },
      {
        "id": "F9AAF3FE5F2245699E681878888F6D76",
        "title": "École secondaire de la Rivière-des-Français",
        "type": "school"
      }
    ]

export default rawJurisdictionData;