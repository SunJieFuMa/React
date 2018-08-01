import {connect} from 'react-redux'
import Counter from './component'
import {Actions} from './reducer'

function mapStateToProps(state) {
    return {
        value: state.count,
        text: state.text
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(Actions.increase_click("测试"))
    }
}

// Connected Component
export default connect(mapStateToProps, mapDispatchToProps)(Counter);









