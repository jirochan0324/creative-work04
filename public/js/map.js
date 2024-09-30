const spotContent=document.querySelector('.spot-wrap');

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    mapId:"acaf9c7fa56283e5",
    center: { lat: 35.096452, lng: 138.855823 },
    zoom: 15,
    disableDefaultUI: true,
  });
  // map カスタムアイコンとスポット追加
  // 沼津仲見世商店街
  const nakamiseIcon = "/img/marker/nakamise.png";
  const nakamiseMarker = new google.maps.Marker({
    position: { lat:35.10136662590643, lng:138.85833238270152},
    map,
    title:"沼津仲見世商店街",
    icon:nakamiseIcon,
    animation: google.maps.Animation.DROP,
  })
  // びゅうお
  const byuoIcon = "/img/marker/byuuo.png";
  const byuoMarker = new google.maps.Marker({
    position: { lat:35.08134533898026, lng:138.85449548308014},
    map,
    title:"びゅうお",
    icon:byuoIcon,
    animation: google.maps.Animation.DROP,
  })

  // 千本浜
  const senbonhamaIcon = "/img/marker/senbonhama.png";
  const senbonhamaMarker = new google.maps.Marker({
    position: { lat:35.09458215569831, lng:138.84711773118843},
    map,
    title:"千本浜",
    icon:senbonhamaIcon,
    animation: google.maps.Animation.DROP,
  })

  // 千本浜海岸
  const senbonhamakaiganIcon = "/img/marker/senbonhamakaisuiyolkujou_.png";
  const senbonhamakaiganMarker = new google.maps.Marker({
    position: { lat:35.09592889233768, lng:138.84450536113002},
    map,
    title:"千本浜海岸",
    icon:senbonhamakaiganIcon,
    animation: google.maps.Animation.DROP,
  })

  // 御用邸記念公園
  const goyouteiIcon = "/img/marker/goyoutei.png";
  const goyouteiMarker = new google.maps.Marker({
    position: { lat:35.07287760876833, lng:138.87156927542725},
    map,
    title:"御用邸記念公園",
    icon:goyouteiIcon,
    animation: google.maps.Animation.DROP,
  })
  // 狩野川
  const kanogawaIcon = "/img/marker/kanogawa.png";
  const kanogawaMarker = new google.maps.Marker({
    position: { lat:34.99764322932013, lng:138.93242070868897},
    map,
    title:"狩野川",
    icon:kanogawaIcon,
    animation: google.maps.Animation.DROP,
  })
  // 狩野川放水路
  const housuiroIcon = "/img/marker/housuiro.png";
  const housuiroMarker = new google.maps.Marker({
    position: { lat:35.04846174679539, lng:138.90653467759995},
    map,
    title:"狩野川放水路",
    icon:housuiroIcon,
    animation: google.maps.Animation.DROP,
  })
  // 三津浜海水浴場
  const mitohamaIcon = "/img/marker/mitokaisuiyokujou_.png";
  const mitohamaMarker = new google.maps.Marker({
    position: { lat:35.02097114173977, lng:138.89722142581763},
    map,
    title:"三津浜海水浴場",
    icon:mitohamaIcon,
    animation: google.maps.Animation.DROP,
  })
  // 淡島
  const awasimaIcon = "/img/marker/awasima.png";
  const awasimaMarker = new google.maps.Marker({
    position: { lat:35.03338759315064, lng: 138.88844245386306},
    map,
    title:"淡島",
    icon:awasimaIcon,
    animation: google.maps.Animation.DROP,
  })
  // 出会い岬
  const deaimisakiIcon = "/img/marker/deaimisaki.png";
  const deaimisakiMarker = new google.maps.Marker({
    position: { lat:34.983192000833014,lng:138.77031843414616},
    map,
    title:"出会い岬",
    icon:deaimisakiIcon,
    animation: google.maps.Animation.DROP,
  })
  // 御浜岬
  const ohamamisakiIcon = "/img/marker/ohamamisaki.png";
  const ohamamisakiMarker = new google.maps.Marker({
    position: { lat:34.97625861296988, lng:138.76538517682602},
    map,
    title:"御浜岬",
    icon:ohamamisakiIcon,
    animation: google.maps.Animation.DROP,
  })


  const markers=[nakamiseMarker,byuoMarker,senbonhamaMarker,senbonhamakaiganMarker,goyouteiMarker,kanogawaMarker,housuiroMarker,mitohamaMarker,awasimaMarker,deaimisakiMarker,ohamamisakiMarker];
  console.log(markers);
  markers.forEach(marker => {
    marker.addListener('click',({domEvent,latlng})=>{
      const {target} = domEvent;
      spotContent.classList.remove('spot-wrap-out');
      spotContent.classList.add('spot-wrap-in');
    })
  });
  // byuoMarker.addListener('click', ({domEvent, latLng}) => {
  //   const {target} = domEvent;
  //   spotContent.classList.remove('spot-wrap-out');
  //   spotContent.classList.add('spot-wrap-in');
  // });
}


const closeBtn=document.getElementById('close');
closeBtn.addEventListener('click',()=>{
  spotContent.classList.add('spot-wrap-out');
})



window.initMap = initMap;