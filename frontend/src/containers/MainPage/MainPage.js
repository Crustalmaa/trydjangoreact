import React from 'react';
import classes from './MainPage.module.css';
const MainPage =(props)=>{
    let statistic = [
        {
            origin: 'Customer', 
            number: 36254, 
            numpercent: false,
            unit: '', 
            procent: 5.27, 
            increase: true, 
            time: 'Since last month'
        }, 
        {
            origin: 'Customer1', 
            number: 36254, 
            numpercent: false,
            unit: '', 
            procent: 5.27, 
            increase: true, 
            time: 'Since last month'
        },
        {
            origin: 'Revenue', 
            number: 6254,
            numpercent: false, 
            unit: '$', 
            procent: 7.00, 
            increase: false, 
            time: 'Since last month'
        },
        {
            origin: 'Growth', 
            number: 30.56,
            numpercent: true ,
            unit: '+', 
            procent: 4.87, 
            increase: true, 
            time: 'Since last month'
        }
    ];
    let productList = [
        {
            title: 'ASOS Ridley High Waist', 
            date: '07 April 2018', 
            price: 79.49, 
            quantity: 82, 
            amount: 6518.18
        },
        {
            title: 'Marco Lightweight Shirt', 
            date: '25 March 2018', 
            price: 128.50, 
            quantity: 37, 
            amount: 4754.50
        }, {
            title: 'Half Sleeve Shirt', 
            date: '17 March 2018', 
            price: 39.99, 
            quantity: 64, 
            amount: 2559.36
        }, 
        {
            title: 'Lightweight Jacket', 
            date: '12 March 2018', 
            price: 20.00, 
            quantity: 184, 
            amount: 3680.00
        },
        {
            title: 'Marco Shoes', 
            date: '05 March 2018', 
            price: 28.49, 
            quantity: 69, 
            amount: 1965.81
        }
    ];
    return(
        <div className = {classes.MainPage}>
            <div className = {classes.UzuuleltList}>
                {statistic.map(igkey =>{
                    return(
                        <div className = {classes.Uzuulelt}>
                            <h4>{igkey.origin}</h4>
                            <h5>{igkey.unit}{igkey.number}{igkey.numpercent? '%': ''}</h5>
                            <p> <span className= {igkey.increase? classes.green: classes.red}> {igkey.increase ?<i class="mdi mdi-arrow-up-bold"></i> : <i class="mdi mdi-arrow-down-bold"></i>}{igkey.procent.toFixed(2)}%</span>{igkey.time}</p>
                        </div>
                    );
                })}
               
            </div>
            <div className={classes.SellingProductList}>
                <div className = {classes.SellingProductListTitle}>
                    <h5>top selling products</h5>
                    <button>Export <i class="mdi mdi-download ml-1"></i></button>
                </div>
                <div className = {classes.SellingProductListContainer}>
                {
                    productList.map(igkey =>{
                        return(
                            <div className = {classes.SellingProductItem}>
                                <p className = {classes.product}>{igkey.title}<span>{igkey.date}</span></p>
                                <p className = {classes.price}>${igkey.price}<span>Price</span></p>
                                <p className = {classes.quantity}>{igkey.quantity}<span>Quantity</span></p>
                                <p className = {classes.amount}>{igkey.amount}<span>Amount</span></p>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        </div>
    );
}
export default MainPage;