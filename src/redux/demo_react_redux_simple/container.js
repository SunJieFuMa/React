import {connect} from 'react-redux'
import Counter from './component'

function mapStateToProps(state) {
    return {
        value: state.count
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch({type: 'increase'})
    }
}
// Connected Component
export default connect(mapStateToProps, mapDispatchToProps)(Counter);









