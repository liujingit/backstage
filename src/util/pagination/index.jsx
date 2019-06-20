import React        from 'react';
import RcPagination   from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';
class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                {/* ...this.props是js的新语法 等价于 current={this.props.current} total={this.props.total} */}
                    <RcPagination 
                        {...this.props} 
                        showQuickJumper
                    />
                </div>
            </div>
        );
    }
}

export default Pagination;