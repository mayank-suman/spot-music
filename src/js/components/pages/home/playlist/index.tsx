import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { getUser } from "../../../util/api.ts";

function Playlist(props) {
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    // async function setData () {
    //   await getUser();
    //   setPlaylist
    // }

    // setData();
  }, [])
  
  return (
    <div>Playlist</div>
  )
}

Playlist.propTypes = {}

export default Playlist;
