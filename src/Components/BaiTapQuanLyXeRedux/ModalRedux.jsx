import React, { Component } from 'react';

import {connect} from 'react-redux';

class ModalRedux extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* Button trigger modal */}
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                        Launch
  </button>
                    {/* Modal */}
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {/* {this.props.thongTinXe.} */}
                                    {this.props.thongTinXe.tenSP}
        </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        thongTinXe: state.stateModal.thongTinXe
    }
}

export default connect(mapStateToProps)(ModalRedux);//create components store the state prop