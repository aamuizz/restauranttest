import axios from "axios";
import {FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import ProductItem from "./ProductItem";
import {Icon} from "react-native-elements";

export  default class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {loaded: false,data:[{categoryId: '',categoryname: '',items:[{name: '', imageURL:'',price:''}]}]}
        this.getdata = this.getdata.bind(this);
    }
    getdata = (response)=>{
        var categorydata= []
        for (var j = 0; j < response.data.payLoad.length; ++j) {
            var allitems = [];
            var items = response.data.payLoad[j].item;
            for (var i = 0; i < items.length; ++i) {
                allitems.push({name: items[i].name, imageURL: items[i].imageURL, price:items[i].itemSize[0].price})
            }
            categorydata.push({categoryId: response.data.payLoad[j].categoryId, categoryname: response.data.payLoad[j].name,items:allitems});
        }
        this.setState({loaded:true,data:categorydata});
        console.log(JSON.stringify(this.state))

    }
    componentDidMount() {
        var self = this;
        axios.get('https://mywyzer.com:8443/Menu/get?businessId=8983&userId=12238&dateTime=2021-06-10 12:02:26&offset=0&locationId=11072')
            .then(function (response) {
                self.getdata(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    horizontalitemview = ({ item }) => (
            <>
                <ProductItem
                    image={item.imageURL}
                    title={item.name}
                    price={item.price}
                />
            </>

        );

    render() {
        return(
           <View  style={{flex: 1}}>
               <ScrollView
                   showsVerticalScrollIndicator={false}>
                {this.state.data.map((products) => (
                    this.state.loaded?
                    <>
                    <Text style={this.styles.title}>{products.categoryname}</Text>
                    <FlatList
                        style={{marginBottom:20}}
                        data={products.items}
                        renderItem={this.horizontalitemview}
                        keyExtractor={products => products.categoryId}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                    </>
                 : <View></View>))}
               </ScrollView>
               <View style={this.styles.footerstyle}>
                <Text style={this.styles.footertextstyle}>Bundu Khan BBQ Dallas</Text>
               <View style={this.styles.footericonsstyle}>
                   <Icon style={{marginTop:12,marginRight:2}} name={'caretup'} size={12} type='antdesign' />
                   <Icon name={'shoppingcart'} size={35} type='antdesign' />
                   <View
                       style={{
                           position: 'absolute',
                           backgroundColor: 'green',
                           width: 18,
                           height: 18,
                           borderRadius: 15 / 2,
                           right: 5,
                           top: +2,
                           alignItems: 'center',
                           justifyContent: 'center',
                       }}>
                       <Text
                           style={{
                               alignItems: 'center',
                               justifyContent: 'center',
                               color: "#FFFFFF",
                               fontSize: 10,
                           }}>
                           2
                       </Text>
                   </View>
               </View>
               </View>
           </View>
        )
    }
    styles = StyleSheet.create({
        title: {
            fontFamily: 'open-sans-bold',
            fontSize: 21,
            fontWeight: "bold",
            margin: 10,
            width: '100%'
        },
        footerstyle:{
            height:53,
            backgroundColor : "white",
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems:'center'
        },
        footertextstyle:{
            marginLeft:10,
            marginTop:3,
            fontFamily: 'Roboto',
            fontSize: 20,
        },
        footericonsstyle:{
            flexDirection:'row',
            marginRight:10,
            marginTop:5
        }
        }
    );
}