"use strict";

let $= require("jquery");

function makeSongList(songList) {
  let $songsDisplay =
  $(`<div class="uiContainer__song-list box">
    <ul class="song-list">
    </ul>
  </div>`);
  $("#listMusicView").html($songsDisplay);
  for (let song in songList ) {
    let currentSong = songList[song],
        songListItem = $("<br>"+ "<li>", {class: "song list-inline col-md-4"}),
        title = $("<span/>", {class: "song-title col-md-4"}).text(currentSong.title),
        songListData = $("<ul/>", {class: "song list-inline col-md-4"}),
        //songListEdit = $("<a>", {"data-edit-id": song, class: "edit-btn btn btn-warning", text: "edit" }),
        songListDelete = $("<a>", {"data-delete-id": song, class: "delete-btn btn btn-primary col-sm-2", text: "delete " });
        // Same as `<a id="${song}" class="delete-btn waves-effect waves-light btn">delete</a>`

    songListData.append(
      `<li>${currentSong.artist}</li>
      <li>${currentSong.album}</li>
      `);

    $(".song-list").append(songListItem.append(title));
    $(".song-list").append(songListItem.append(songListData).append(songListDelete));
  }
}

function songForm(song, songId) {
  return new Promise(function (resolve, reject) {
    let songItem = {
      title: song ? song.title : "",
      artist: song ? song.artist : "",
      year: song ? song.year : "",
      album: song ? song.album : "",
      formTitle: song ? `Edit "${song.title}"` : "Add a new song",
      btnText: song ? "save changes" : "save song",
      btnId: song ? "save_edit_btn" : "save_new_btn"
    },
    form =
      `<h3>${songItem.formTitle}</h3>
      <input type="text" id="form--title" placeholder="title" value="${songItem.title}"></input>
      <input type="text" id="form--artist" placeholder="artist" value="${songItem.artist}"></input>
      <input type="text" id="form--album" placeholder="album" value="${songItem.album}"></input>
      <input type="text" id="form--year" placeholder="year" value="${songItem.year}"></input>
      <button id="${songId}" class=${songItem.btnId}>${songItem.btnText}</button>`;
    resolve(form);
  });
}

module.exports = {
  makeSongList,
  songForm
};


