import React from 'react';
import { pipe } from 'ramda';
import {
  withStyles
} from '@material-ui/core';
import styles from './styles';

class Component extends React.Component {
  componentDidMount() {
    fetch('https://www.youtube.com/results?search_query=versus')
      .then(resp => resp.querySelectorAll('#video-title.ytd-video-renderer'))
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        Hello
      </div>
    );
  }
}

export const Battles = pipe(
  withStyles(styles)
)(Component);

// https://www.googleapis.com/youtube/v3/search?key={your_key_here}&channelId={channel_id_here}&part=snippet,id&order=date&maxResults=20
