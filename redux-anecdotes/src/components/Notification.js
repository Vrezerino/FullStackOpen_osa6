
import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
	const notif = props.notif
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return notif ? (
    <div style={style}>
      {notif}
    </div>
  ) : null
}

const mapStateToProps = (state) => {
	return { notif: state.notification }
}

export default connect(
	mapStateToProps,
	null
)(Notification)