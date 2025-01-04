var allCountries = [
    ["Afghanistan (‫افغانستان‬‎)", "AF", "93", "999 999 9999"],
    ["Albania (Shqipëri)", "AL", "355", "999 999 9999"],
    ["Algeria (‫الجزائر‬‎)", "DZ", "213", "9999 99 99 99"],
    ["American Samoa", "AS", "1684", "(999) 999-9999"],
    ["Andorra", "AD", "376", "999 999"],
    ["Angola", "AO", "244", "999 999 999"],
    ["Anguilla", "AI", "1264", "(999) 999-9999"],
    ["Antigua and Barbuda", "AG", "1268", "(999) 999-9999"],
    ["Argentina", "AR", "54", "99 99-9999-9999"],
    ["Armenia (Հայաստան)", "AM", "374", "999 999999"],
    ["Aruba", "AW", "297", "999 9999"],
    ["Australia", "AU", "61", "9999 999 999"],
    ["Austria (Österreich)", "AT", "43", "9999 999999"],
    ["Azerbaijan (Azərbaycan)", "AZ", "994", "999 999 99 99"],
    ["Bahamas", "BS", "1242", "(999) 999-9999"],
    ["Bahrain (‫البحرين‬‎)", "BH", "973", "9999 9999"],
    ["Bangladesh (বাংলাদেশ)", "BD", "880", "9999-999999"],
    ["Barbados", "BB", "1246", "(999) 999-9999"],
    ["Belarus (Беларусь)", "BY", "375", "9 999 999-99-99"],
    ["Belgium (België)", "BE", "32", "999 99 99 99"],
    ["Belize", "BZ", "501", "622-1234"],
    ["Benin (Bénin)", "BJ", "229", "99 99 99 99"],
    ["Bermuda", "BM", "1441", "(999) 999-9999"],
    ["Bhutan (འབྲུག)", "BT", "975", "99 99 99 99"],
    ["Bolivia", "BO", "591", "99999999"],
    ["Bosnia and Herzegovina (Босна и Херцеговина)", "BA", "387", "99 999 999"],
    ["Botswana", "BW", "267", "99 999 999"],
    ["Brazil (Brasil)", "BR", "55", "(99) 99999-9999"],
    ["British Indian Ocean Territory", "IO", "246", "999 9999"],
    ["British Virgin Islands", "VG", "1284", "(999) 999-9999"],
    ["Brunei", "BN", "673", "999 9999"],
    ["Bulgaria (България)", "BG", "359", "99 999 999"],
    ["Burkina Faso", "BF", "226", "99 99 99 99"],
    ["Burundi (Uburundi)", "BI", "257", "99 99 99 99"],
    ["Cambodia (កម្ពុជា)", "KH", "855", "999 999 999"],
    ["Cameroon (Cameroun)", "CM", "237", "9 99 99 99 99"],
    ["Canada", "CA", "1", "(999) 999-9999", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
    ["Cape Verde (Kabu Verdi)", "CV", "238", "999 99 99"],
    ["Caribbean Netherlands", "BQ", "599", "999 9999", 1],
    ["Cayman Islands", "KY", "1345", "(999) 999-9999"],
    ["Central African Republic (République centrafricaine)", "CF", "236", "99 99 99 99"],
    ["Chad (Tchad)", "TD", "235", "99 99 99 99"],
    ["Chile", "CL", "56", "(9) 9999 9999"],
    ["China (中国)", "CN", "86", "999 9999 9999"],
    ["Colombia", "CO", "57", "999 9999999"],
    ["Comoros (‫جزر القمر‬‎)", "KM", "269", "999 99 99"],
    ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "CD", "243", "999 999 999"],
    ["Congo (Republic) (Congo-Brazzaville)", "CG", "242", "99 999 9999"],
    ["Cook Islands", "CK", "682", "99 999"],
    ["Costa Rica", "CR", "506", "9999 9999"],
    ["Côte d’Ivoire", "CI", "225", "99 99 99 99"],
    ["Croatia (Hrvatska)", "HR", "385", "99 999 9999"],
    ["Cuba", "CU", "53", "99 9999999"],
    ["Curaçao", "CW", "599", "9 999 9999", 0],
    ["Cyprus (Κύπρος)", "CY", "357", "99 999999"],
    ["Czech Republic (Česká republika)", "CZ", "420", "999 999 999"],
    ["Denmark (Danmark)", "DK", "45", "99 99 99 99"],
    ["Djibouti", "DJ", "253", "99 99 99 99"],
    ["Dominica", "DM", "1767", "(999) 999-9999"],
    ["Dominican Republic (República Dominicana)", "DO", "1", "(999) 999-9999", 2, ["809", "829", "849"]],
    ["Ecuador", "EC", "593", "99 999 9999"],
    ["Egypt (‫مصر‬‎)", "EG", "20", "999 999 9999"],
    ["El Salvador", "SV", "503", "9999 9999"],
    ["Equatorial Guinea (Guinea Ecuatorial)", "GQ", "240", "999 999 999"],
    ["Eritrea", "ER", "291", "99 999 999"],
    ["Estonia (Eesti)", "EE", "372", "9999 9999"],
    ["Ethiopia", "ET", "251", "99 999 9999"],
    ["Falkland Islands (Islas Malvinas)", "FK", "500", "99999"],
    ["Faroe Islands (Føroyar)", "FO", "298", "999999"],
    ["Fiji", "FJ", "679", "999 9999"],
    ["Finland (Suomi)", "FI", "358", "999 9999999"],
    ["France", "FR", "33", "99 99 99 99 99"],
    ["French Guiana (Guyane française)", "GF", "594", "999 99 99 99"],
    ["French Polynesia (Polynésie française)", "PF", "689", "99 99 99 99"],
    ["Gabon", "GA", "241", "99 99 99 99"],
    ["Gambia", "GM", "220", "999 9999"],
    ["Georgia (საქართველო)", "GE", "995", "999 99 99 99"],
    ["Germany (Deutschland)", "DE", "49", "9999 9999999"],
    ["Ghana (Gaana)", "GH", "233", "99 999 9999"],
    ["Gibraltar", "GI", "350", "99999999"],
    ["Greece (Ελλάδα)", "GR", "30", "999 999 9999"],
    ["Greenland (Kalaallit Nunaat)", "GL", "299", "99 99 99"],
    ["Grenada", "GD", "1473", "(999) 999-9999"],
    ["Guadeloupe", "GP", "590", "999 99 99 99", 0],
    ["Guam", "GU", "1671", "(999) 999-9999"],
    ["Guatemala", "GT", "502", "9999 9999"],
    ["Guinea (Guinée)", "GN", "224", "999 99 99 99"],
    ["Guinea-Bissau (Guiné Bissau)", "GW", "245", "999 999 999"],
    ["Guyana", "GY", "592", "999 9999"],
    ["Haiti", "HT", "509", "99 99 9999"],
    ["Honduras", "HN", "504", "9999-9999"],
    ["Hong Kong (香港)", "HK", "852", "9999 9999"],
    ["Hungary (Magyarország)", "HU", "36", "(99) 999 999"],
    ["Iceland (Ísland)", "IS", "354", "999 9999"],
    ["India (भारत)", "IN", "91", "99999 99999"],
    ["Indonesia", "ID", "62", "999-999-999"],
    ["Iran (‫ایران‬‎)", "IR", "98", "999 999 9999"],
    ["Iraq (‫العراق‬‎)", "IQ", "964", "999 999 9999"],
    ["Ireland", "IE", "353", "99 999 9999"],
    ["Israel (‫ישראל‬‎)", "IL", "972", "99-999-9999"],
    ["Italy (Italia)", "IT", "39", "999 999 9999", 0],
    ["Jamaica", "JM", "1876", "(999) 999-9999"],
    ["Japan (日本)", "JP", "81", "99-9999-9999"],
    ["Jordan (‫الأردن‬‎)", "JO", "962", "99 9999 9999"],
    ["Kazakhstan (Казахстан)", "KZ", "7", "9 (999) 999 9999", 1],
    ["Kenya", "KE", "254", "9999 999999"],
    ["Kiribati", "KI", "686", "99999999"],
    ["Kuwait (‫الكويت‬‎)", "KW", "965", "999 99999"],
    ["Kyrgyzstan (Кыргызстан)", "KG", "996", "9999 999 999"],
    ["Laos (ລາວ)", "LA", "856", "99 99 999 999"],
    ["Latvia (Latvija)", "LV", "371", "99 999 999"],
    ["Lebanon (‫لبنان‬‎)", "LB", "961", "99 999 999"],
    ["Lesotho", "LS", "266", "9999 9999"],
    ["Liberia", "LR", "231", "99 999 9999"],
    ["Libya (‫ليبيا‬‎)", "LY", "218", "999-99999999"],
    ["Liechtenstein", "LI", "423", "999 999 999"],
    ["Lithuania (Lietuva)", "LT", "370", "(9-999) 9999"],
    ["Luxembourg", "LU", "352", "999 999 999"],
    ["Macau (澳門)", "MO", "853", "9999 9999"],
    ["Macedonia (FYROM) (Македонија)", "MK", "389", "99 999 999"],
    ["Madagascar (Madagasikara)", "MG", "261", "99 99 999 99"],
    ["Malawi", "MW", "265", "999 99 99 99"],
    ["Malaysia", "MY", "60", "99-999 9999"],
    ["Maldives", "MV", "960", "999-9999"],
    ["Mali", "ML", "223", "99 99 99 99"],
    ["Malta", "MT", "356", "9999 9999"],
    ["Marshall Islands", "MH", "692", "999-9999"],
    ["Martinique", "MQ", "596", "999 99 99 99"],
    ["Mauritania (‫موريتانيا‬‎)", "MR", "222", "99 99 99 99"],
    ["Mauritius (Moris)", "MU", "230", "9999 9999"],
    ["Mexico (México)", "MX", "52", "99 999 999 9999"],
    ["Micronesia", "FM", "691", "999 9999"],
    ["Moldova (Republica Moldova)", "MD", "373", "9999 99 999"],
    ["Monaco", "MC", "377", "99 99 99 99 99"],
    ["Mongolia (Монгол)", "MN", "976", "9999 9999"],
    ["Montenegro (Crna Gora)", "ME", "382", "99 999 999"],
    ["Montserrat", "MS", "1664", "(999) 999-9999"],
    ["Morocco (‫المغرب‬‎)", "MA", "212", "999-999999"],
    ["Mozambique (Moçambique)", "MZ", "258", "99 999 9999"],
    ["Myanmar (Burma) (မြန်မာ)", "MM", "95", "99 999 9999"],
    ["Namibia (Namibië)", "NA", "264", "99 999 9999"],
    ["Nauru", "NR", "674", "999 9999"],
    ["Nepal (नेपाल)", "NP", "977", "999-9999999"],
    ["Netherlands (Nederland)", "NL", "31", "99 99999999"],
    ["New Caledonia (Nouvelle-Calédonie)", "NC", "687", "99.99.99"],
    ["New Zealand", "NZ", "64", "99 999 9999"],
    ["Nicaragua", "NI", "505", "9999 9999"],
    ["Niger (Nijar)", "NE", "227", "99 99 99 99"],
    ["Nigeria", "NG", "234", "999 999 9999"],
    ["Niue", "NU", "683", "999 9999"],
    ["Norfolk Island", "NF", "672", "9 99999"],
    ["North Korea (조선 민주주의 인민 공화국)", "KP", "850", "999 999 9999"],
    ["Northern Mariana Islands", "MP", "1670", "(999) 999-9999"],
    ["Norway (Norge)", "NO", "47", "999 99 999"],
    ["Oman (‫عُمان‬‎)", "OM", "968", "9999 9999"],
    ["Pakistan (‫پاکستان‬‎)", "PK", "92", "999 9999999"],
    ["Palau", "PW", "680", "999 9999"],
    ["Palestine (‫فلسطين‬‎)", "PS", "970", "999 999 999"],
    ["Panama (Panamá)", "PA", "507", "9999-9999"],
    ["Papua New Guinea", "PG", "675", "9999 9999"],
    ["Paraguay", "PY", "595", "999 999999"],
    ["Peru (Perú)", "PE", "51", "999 999 999"],
    ["Philippines", "PH", "63", "999 999 9999"],
    ["Poland (Polska)", "PL", "48", "999 999 999"],
    ["Portugal", "PT", "351", "999 999 999"],
    ["Puerto Rico", "PR", "1", "(999) 999-9999", 3, ["787", "939"]],
    ["Qatar (‫قطر‬‎)", "QA", "974", "9999 9999"],
    ["Réunion (La Réunion)", "RE", "262", "999 99 99 99"],
    ["Romania (România)", "RO", "40", "999 999 999"],
    ["Russia (Россия)", "RU", "7", "9 (999) 999-99-99", 0],
    ["Rwanda", "RW", "250", "999 999 999"],
    ["Saint Barthélemy (Saint-Barthélemy)", "BL", "590", "999 99 99 99", 1],
    ["Saint Helena", "SH", "290", "99999"],
    ["Saint Kitts and Nevis", "KN", "1869", "(999) 999-9999"],
    ["Saint Lucia", "LC", "1758", "(999) 999-9999"],
    ["Saint Martin (Saint-Martin (partie française))", "MF", "590", "999 99 99 99", 2],
    ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "PM", "508", "999 99 99"],
    ["Saint Vincent and the Grenadines", "VC", "1784", "(999) 999-9999"],
    ["Samoa", "WS", "685", "99 99999"],
    ["San Marino", "SM", "378", "99 99 99 99"],
    ["São Tomé and Príncipe (São Tomé e Príncipe)", "ST", "239", "999 9999"],
    ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "SA", "966", "99 999 9999"],
    ["Senegal (Sénégal)", "SN", "221", "99 999 99 99"],
    ["Serbia (Србија)", "RS", "381", "99 9999999"],
    ["Seychelles", "SC", "248", "9 999 999"],
    ["Sierra Leone", "SL", "232", "(999) 999999"],
    ["Singapore", "SG", "65", "9999 9999"],
    ["Sint Maarten", "SX", "1721", "(999) 999-9999"],
    ["Slovakia (Slovensko)", "SK", "421", "999 999 999"],
    ["Slovenia (Slovenija)", "SI", "386", "99 999 999"],
    ["Solomon Islands", "SB", "677", "99 99999"],
    ["Somalia (Soomaaliya)", "SO", "252", "9 9999999"],
    ["South Africa", "ZA", "27", "99 999 9999"],
    ["South Korea (대한민국)", "KR", "82", "99-9999-9999"],
    ["South Sudan (‫جنوب السودان‬‎)", "SS", "211", "999 999 999"],
    ["Spain (España)", "ES", "34", "999 99 99 99"],
    ["Sri Lanka (ශ්‍රී ලංකාව)", "LK", "94", "99 999 9999"],
    ["Sudan (‫السودان‬‎)", "SD", "249", "99 999 9999"],
    ["Suriname", "SR", "597", "999-9999"],
    ["Swaziland", "SZ", "268", "9999 9999"],
    ["Sweden (Sverige)", "SE", "46", "99-999 99 99"],
    ["Switzerland (Schweiz)", "CH", "41", "99 999 99 99"],
    ["Syria (‫سوريا‬‎)", "SY", "963", "999 999 999"],
    ["Taiwan (台灣)", "TW", "886", "999 999 999"],
    ["Tajikistan", "TJ", "992", "999 99 9999"],
    ["Tanzania", "TZ", "255", "999 999 999"],
    ["Thailand (ไทย)", "TH", "66", "99 999 9999"],
    ["Timor-Leste", "TL", "670", "9999 9999"],
    ["Togo", "TG", "228", "99 99 99 99"],
    ["Tokelau", "TK", "690", "9999"],
    ["Tonga", "TO", "676", "999 9999"],
    ["Trinidad and Tobago", "TT", "1868", "(999) 999-9999"],
    ["Tunisia (‫تونس‬‎)", "TN", "216", "99 999 999"],
    ["Turkey (Türkiye)", "TR", "90", "999 999 99 99"],
    ["Turkmenistan", "TM", "993", "9 99 999999"],
    ["Turks and Caicos Islands", "TC", "1649", "(999) 999-9999"],
    ["Tuvalu", "TV", "688", "901234"],
    ["U.S. Virgin Islands", "VI", "1340", "(999) 999-9999"],
    ["Uganda", "UG", "256", "999 999999"],
    ["Ukraine (Україна)", "UA", "380", "99 999 9999"],
    ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "AE", "971", "99 999 9999"],
    ["United Kingdom", "GB", "44", "9999 999999"],
    ["United States", "US", "1", "(999) 999-9999", 0],
    ["Uruguay", "UY", "598", "99 999 999"],
    ["Uzbekistan (Oʻzbekiston)", "UZ", "998", "9 99 999 99 99"],
    ["Vanuatu", "VU", "678", "591 2345"],
    ["Vatican City (Città del Vaticano)", "VA", "39", "999 999 9999", 1],
    ["Venezuela", "VE", "58", "0412-1234567"],
    ["Vietnam (Việt Nam)", "VN", "84", "99 999 99 99"],
    ["Wallis and Futuna", "WF", "681", "99 99 99"],
    ["Yemen (‫اليمن‬‎)", "YE", "967", "999 999 999"],
    ["Zambia", "ZM", "260", "99 9999999"],
    ["Zimbabwe", "ZW", "263", "99 999 9999"]
];
// loop over all of the countries above
var country = '<option value=""> Country</option>';
for (var i = 0; i < allCountries.length; i++) {
    var c = allCountries[i];
    allCountries[i] = {
        name: c[0],
        iso2: c[1],
        dialCode: c[2],
        phoneformat: c[3],
        priority: c[4] || 0,
        areaCodes: c[5] || null
    };
    country += '<option value="' + c[2] + '" data-format="' + c[3] + '">' + c[0] + '</option>';
}
$(".country-codes").html(country);

$(document).on('change', '.country-codes', function () {
    var pos = $(this).attr('data-pos');
    var code = $(this).val();
    var phoneformat = $('option:selected', this).attr('data-format');
    if (pos === 'top') {
      if(code === ''){
        $("#c_code_top").val('');
        $("#code_top").val('');
        $("#ph_top").val('');
        $("#ph_top").attr('data-inputmask', '"mask": "(999) 999-9999"');
        $('[data-mask]').inputmask({placeholder: ' ',showMaskOnHover: false,showMaskOnFocus: true,});
        $("#ph_top").focus();
      }else{
        $("#c_code_top").val(code);
        $("#code_top").val('+' + code);
        $("#ph_top").val('');
        // $("#ph_top").attr('data-inputmask', '"mask": "'+phoneformat+'"');
        $('[data-mask]').inputmask({placeholder: ' ',showMaskOnHover: false,showMaskOnFocus: true,});
        //$("#ph_top").focus();
      }
    } else if (pos === 'port') {
      if(code === ''){
        $("#c_code_port").val('');
        $("#code_port").val('');
        $("#ph_port").val('');
        $("#ph_port").attr('data-inputmask', '"mask": "(999) 999-9999"');
        $('[data-mask]').inputmask({placeholder: ' ',showMaskOnHover: false,showMaskOnFocus: true,});
        //$("#ph_port").focus();
      }else{
        $("#c_code_port").val(code);
        $("#code_port").val('+' + code);
        $("#ph_port").val('');
        // $("#ph_port").attr('data-inputmask', '"mask": "'+phoneformat+'"');
        $('[data-mask]').inputmask();
        $("#ph_port").focus();
      }
    } else {
      if(code === ''){
        $("#c_code").val('');
        $("#code").val('');
        $("#ph").val('');
        $("#ph").attr('data-inputmask', '"mask": "(999) 999-9999"');
        $('[data-mask]').inputmask({placeholder: ' ',showMaskOnHover: false,showMaskOnFocus: true,});
        //$("#ph").focus();
      }else{
        $("#c_code").val(code);
        $("#code").val('+' + code);
        $("#ph").val('');
        // $("#ph").attr('data-inputmask', '"mask": "'+phoneformat+'"');
        $('[data-mask]').inputmask({placeholder: ' ',showMaskOnHover: false,showMaskOnFocus: true,});
        $("#ph").focus();
      }
    }
});

