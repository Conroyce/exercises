$(function(){

  var oldGuardians = [
    {
      name: "Star Lord",
      notes: "Team leader"
    },
    {
      name: "Drax the Destroyer"
    },
    {
      name: "Adam Warlock"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Rocket",
      notes: "Served as temporary leader during Star-Lord's absence"
    },
    {
      name: "Gamora"
    }
  ];

  var newGuardians = [
    {
      name: "Mantis",
      notes: "Served as an advisor beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before becoming an active member."
    },
    {
      name: "Groot",
      notes: "Appeared as a sapling beginning in Guardians of the Galaxy vol. 2 #1 (July 2008); joined active team after fully regrowing."
    },
    {
      name: "Jack Flag"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Cosmo the Spacedog",
      notes: "Assisted the team beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before officially joining team."
    },
    {
      name: "Major Victory",
      notes: "Also member of the alternate reality Guardians of the Galaxy team."
    },
    {
      name: "Bug"
    },
    {
      name: "Moondragon",
      notes: "Resurrected by Drax and Phyla-Vell."
    }
  ];
  var $merged = $.merge(oldGuardians,newGuardians);
  var $arr = $.map(oldGuardians, function(item,index) {
    return item.name;
  });
  var $unique = $arr.filter(function(value) {
    if (!$arr[value]) {
      $arr[value] = 1;
      return value;
    }   
  });
  var $uniqObj = $merged.filter(function(value) {
    if (!$merged[value.name]) {
      $merged[value.name] = 1;
      return value;
    }
  });   
  $('body').append('<table id="info"/>');
  for (var i = 0; i < $unique.length; i++) {
    $('#info').append('<th class="header-' + i + '">' + $arr[i] + '</th>');
    if ($uniqObj[i].notes) {
      $('.header-' + i).append('<tr>' + $uniqObj[i].notes + '</tr>');
    }

  }

  

});