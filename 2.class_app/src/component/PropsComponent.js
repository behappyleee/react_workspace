import React,  {Component} from "react";
import {List,ListItem} from '@material-ui/core'; // npm install @material-ui/core 인스톨 후 yarn start 다시시작하기

class PropsComponent extends Component {
    /* 반드시 컴포넌트를 상속 받아야 함  */
    render() {
        const component_name = 'PropsComponent 입니다.';
       // const id = this.props.id;
       // const name = this.props.name;   
       // const orders = this.props.orders;  
        const {id, name, orders} = this.props;
        return (
            /* div 밑에는 실제 DOM 임 실제 DOM을 읽어와서 가상 DOM에 집어 넣음  */
            <div>
                <h3> {component_name}  </h3> 
                <h3> id:  {id}   </h3> 
                <h3> name:  {name}   </h3>        
                <h3> orders 갯수 : {orders.length} - {orders} </h3> { /* 3: Book1Book2Book3 */ }

            <List>
                <ListItem>  
                     orders[0] : {orders[0]}
                </ListItem>

                <ListItem>  
                      orders[1] : {orders[1]}
                </ListItem>

                <ListItem>  
                      orders[2] : {orders[2]}
                </ListItem>
            </List>

            </div>    

        );     
    }
}

/* 이런 식으로 export 해주는게 기본임 */
export default PropsComponent;




































