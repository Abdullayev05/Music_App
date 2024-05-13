// // // JSON verisi
// // const playlistData = {
// //     "songs": [
// //       {
// //         "name": "no time",
// //         "artist": "lastlings",
// //         "image": "http://physical-authority.surge.sh/imgs/1.jpg",
// //         "audio": "http://physical-authority.surge.sh/music/1.mp3"
// //       },
// //       {
// //         "name": "blinding lights",
// //         "artist": "the weeknd",
// //         "image": "http://physical-authority.surge.sh/imgs/2.jpg",
// //         "audio": "http://physical-authority.surge.sh/music/2.mp3"
// //       },
// //       {
// //         "name": "джованна",
// //         "artist": "enrasta",
// //         "image": "http://physical-authority.surge.sh/imgs/3.jpg",
// //         "audio": "http://physical-authority.surge.sh/music/3.mp3"
// //       },
// //       {
// //         "name": "a man",
// //         "artist": "travis scott",
// //         "image": "http://physical-authority.surge.sh/imgs/4.jpg",
// //         "audio": "http://physical-authority.surge.sh/music/4.mp3"
// //       },
// //       {
// //         "name": "unforgetting",
// //         "artist": "zaxx",
// //         "image": "http://physical-authority.surge.sh/imgs/5.jpg",
// //         "audio": "http://physical-authority.surge.sh/music/5.mp3"
// //       },
// //       {
// //         "name": "waharan",
// //         "artist": "Randall",
// //         "image": "http://physical-authority.surge.sh/imgs/6.jpg",
// //         "audio": "http://physical-authority.surge.sh/music/6.mp3"
// //       },
// //       {
// //         "name": "starlight feat mr gabriel 4am remix",
// //         "artist": "jai wolf",
// //         "image": "http://physical-authority.surge.sh/imgs/7.jpg",
// //         "audio": "http://physical-authority.surge.sh/music/7.mp3"
// //       }
// //     ]
// //   };
  
// //   // Playlist elemanlarını oluşturma
// //   function createPlaylistElement(song) {
// //     const li = document.createElement('li');
// //     li.className = 'player__song';
  
// //     const img = document.createElement('img');
// //     img.className = 'player__img img';
// //     img.src = song.image;
// //     img.alt = '';
  
// //     const p = document.createElement('p');
// //     p.className = 'player__context';
  
// //     const songName = document.createElement('b');
// //     songName.className = 'player__song-name';
// //     songName.textContent = song.name;
  
// //     const titleSpan = document.createElement('span');
// //     titleSpan.className = 'flex';
  
// //     const artistSpan = document.createElement('span');
// //     artistSpan.className = 'player__title';
// //     artistSpan.textContent = song.artist;
  
// //     const audio = document.createElement('audio');
// //     audio.className = 'audio';
// //     audio.src = song.audio;
  
// //     // Elemanları birleştirme
// //     titleSpan.appendChild(artistSpan);
// //     p.appendChild(songName);
// //     p.appendChild(titleSpan);
// //     li.appendChild(img);
// //     li.appendChild(p);
// //     li.appendChild(audio);
  
// //     return li;
// //   }
  
// //   // Playlist oluşturma
// //   function createPlaylist(playlistData) {
// //     const playlist = document.createElement('ul');
// //     playlist.className = 'player__playlist list';
  
// //     playlistData.songs.forEach(song => {
// //       const songElement = createPlaylistElement(song);
// //       playlist.appendChild(songElement);
// //     });
  
// //     return playlist;
// //   }
  
// //   // Playlist'i sayfaya ekleme
// //   const playlistContainer = document.getElementById('playlist-container');
// //   if (playlistContainer) {
// //     const playlist = createPlaylist(playlistData);
// //     playlistContainer.appendChild(playlist);
// //   } else {
// //     console.error('Playlist container not found');
// //   }
  


// // var playlist = document.querySelector('.player__playlist list');

// // var li = document.createElement('li');
// // li.classList.add('player__song');
// // li.innerHTML = `
// //     <img class="player__img img" src="${songs.image}">
// //     <p class="player__context">
// //         <b class="player__song-name">${songs.name}</b>
// //         <span class="flex">
// //             <span class="player__title">${songs.artist}</span>
// //             <span class="player__song-time"></span>
// //         </span>
// //     </p>
// //     <audio class="audio" src="${songs.audio}"></audio>
// // `;

// // playlist.appendChild(li);


// var playlist = document.querySelector('.player__playlist.list');
// var songs = [
//     // {
//     //     "name": "no time",
//     //     "artist": "lastlings",
//     //     "image": "http://physical-authority.surge.sh/imgs/1.jpg",
//     //     "audio": "http://physical-authority.surge.sh/music/1.mp3"
//     //   },
//       {
//         "name": "blinding lights",
//         "artist": "the weeknd",
//         "image": "http://physical-authority.surge.sh/imgs/2.jpg",
//         "audio": "http://physical-authority.surge.sh/music/2.mp3"
//       },
//       {
//         "name": "джованна",
//         "artist": "enrasta",
//         "image": "http://physical-authority.surge.sh/imgs/3.jpg",
//         "audio": "http://physical-authority.surge.sh/music/3.mp3"
//       },
//       {
//         "name": "a man",
//         "artist": "travis scott",
//         "image": "http://physical-authority.surge.sh/imgs/4.jpg",
//         "audio": "http://physical-authority.surge.sh/music/4.mp3"
//       },
//       {
//         "name": "unforgetting",
//         "artist": "zaxx",
//         "image": "http://physical-authority.surge.sh/imgs/5.jpg",
//         "audio": "http://physical-authority.surge.sh/music/5.mp3"
//       },
//       {
//         "name": "waharan",
//         "artist": "Randall",
//         "image": "http://physical-authority.surge.sh/imgs/6.jpg",
//         "audio": "http://physical-authority.surge.sh/music/6.mp3"
//       },
//       {
//         "name": "starlight feat mr gabriel 4am remix",
//         "artist": "jai wolf",
//         "image": "http://physical-authority.surge.sh/imgs/7.jpg",
//         "audio": "http://physical-authority.surge.sh/music/7.mp3"
//       }
// ];

// // songs.forEach(function(song) {
// //     var li = document.createElement('li');
// //     li.classList.add('player__song');
// //     li.innerHTML = `
// //         <img class="player__img img" src="${song.image}">
// //         <p class="player__context">
// //             <b class="player__song-name">${song.name}</b>
// //             <span class="flex">
// //                 <span class="player__title">${song.artist}</span>
// //                 <span class="player__song-time"></span>
// //             </span>
// //         </p>
// //         <audio class="audio" src="${song.audio}"></audio>
// //     `;
// //     playlist.appendChild(li);
// // });
// // songs.forEach(function(song) {
// //   var li = document.createElement('li');
// //   li.classList.add('player__song');
// //   li.innerHTML = `
// //       <img class="player__img img" src="${song.image}">
// //       <p class="player__context">
// //           <b class="player__song-name">${song.name}</b>
// //           <span class="flex">
// //               <span class="player__title">${song.artist}</span>
// //               <span class="player__song-time"></span>
// //           </span>
// //       </p>
// //       <audio class="audio" src="${song.audio}"></audio>
// //   `;
// //   playlist.appendChild(li);

// //   // Şarkıya tıklama işlevini ekle
// //   li.addEventListener('click', function() {
// //       var audio = li.querySelector('.audio');

// //       // Diğer tüm şarkıları durdur
// //       songs.forEach(function(song) {
// //           var otherAudio = document.querySelector(`[src="${song.audio}"]`);
// //           if (otherAudio !== audio) {
// //               otherAudio.pause();
// //           }
// //       });

// //       // Şarkıyı çal veya durdur
// //       if (audio.paused) {
// //           audio.play();
// //       } else {
// //           audio.pause();
// //       }
// //   });
// // });



// var playlist = document.querySelector('.player__playlist.list');
// var songs = [
//     {
//         "name": "blinding lights",
//         "artist": "the weeknd",
//         "image": "http://physical-authority.surge.sh/imgs/2.jpg",
//         "audio": "http://physical-authority.surge.sh/music/2.mp3"
//     },
//     {
//         "name": "джованна",
//         "artist": "enrasta",
//         "image": "http://physical-authority.surge.sh/imgs/3.jpg",
//         "audio": "http://physical-authority.surge.sh/music/3.mp3"
//     },
//     {
//         "name": "a man",
//         "artist": "travis scott",
//         "image": "http://physical-authority.surge.sh/imgs/4.jpg",
//         "audio": "http://physical-authority.surge.sh/music/4.mp3"
//     },
//     {
//         "name": "unforgetting",
//         "artist": "zaxx",
//         "image": "http://physical-authority.surge.sh/imgs/5.jpg",
//         "audio": "http://physical-authority.surge.sh/music/5.mp3"
//     },
//     {
//         "name": "waharan",
//         "artist": "Randall",
//         "image": "http://physical-authority.surge.sh/imgs/6.jpg",
//         "audio": "http://physical-authority.surge.sh/music/6.mp3"
//     },
//     {
//         "name": "starlight feat mr gabriel 4am remix",
//         "artist": "jai wolf",
//         "image": "http://physical-authority.surge.sh/imgs/7.jpg",
//         "audio": "http://physical-authority.surge.sh/music/7.mp3"
//     }
// ];
// songs.forEach(function(songs) {
//     var li = document.createElement('li');
//     li.classList.add('player__song');
//     li.innerHTML = `
//         <img class="player__img img" src="${songs.image}">
//         <p class="player__context">
//             <b class="player__song-name">${songs.name}</b>
//             <span class="flex">
//                 <span class="player__title">${songs.artist}</span>
//                 <span class="player__song-time"></span>
//             </span>
//         </p>
//         <audio class="audio" src="${songs.audio}"></audio>
//     `;
//     playlist.appendChild(li);
//     li.addEventListener('click', function() {
//         var audio = li.querySelector('.audio');
//         songs.forEach(function(songs) {
//             var otherAudio = document.querySelector(`[src="${songs.audio}"]`);
//             if (otherAudio !== audio) {
//                 otherAudio.pause();
//             }
//         });
//         if (audio.paused) {
//             audio.play();
//         } else {
//             audio.pause();
//         }
//     });
// });


