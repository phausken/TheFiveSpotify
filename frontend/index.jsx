import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchPlaylists, fetchPlaylist, receivePlaylists, receivePlaylist, createPlaylist, editPlaylist, deletePlaylist } from './actions/playlist_actions';
import Modal from 'react-modal';


document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.store = store;
  window.fetchPlaylists = fetchPlaylists;
  window.fetchPlaylist = fetchPlaylist;
  window.receivePlaylist = receivePlaylist;
  window.receivePlaylists = receivePlaylists;
  window.createPlaylist = createPlaylist;
  window.editPlaylist = editPlaylist;
  window.deletePlaylist = deletePlaylist;
  ReactDOM.render(<Root store={ store } />, root);



});
