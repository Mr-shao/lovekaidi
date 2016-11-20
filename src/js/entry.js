import './jqUI.js';
import './jqFP.js';

import ManageObj from './ManagePageComponent.js';


ManageObj
        .init('wrapper')
            
            .addPage('page1 index')
                .addComponent({
                    width:500,
                    height:700,
                    css: {
                        width:'100%',
                        height:'100%',
                        position: 'absolute',
                        top: 0,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/fengmian.png)'
                    },
                    animateIn: {
                        top: 0,
                        opacity: 1
                    },
                    animateOut:{
                        top: -10,
                        opacity: 0
                    },
                    delay: 200 
                })
                .addComponent({
                    css: {
                        width:'100px',
                        height:'70px',
                        position: 'absolute',
                        bottom:30,
                        right:10,
                        opacity: 0,
                        backgroundImage: 'url(./src/img/chun.png)'
                    },
                    animateIn: {
                        bottom: 120,
                        opacity: 1
                    },
                    animateOut:{
                        bottom: 30,
                        opacity: 0
                    },
                    delay: 1000 
                })
               
                .addPage()
                    .addComponent({
                        width:500,
                        height:700,
                        css:{
                            width:'100%',
                            height:'100%',
                            position:'absolute',
                            opacity:0,
                            bottom:-10,
                            // background:'yellow'
                        },
                        animateIn:{
                            opacity:1,
                            bottom:0
                        },
                        animateOut:{
                            opacity:0,
                            bottom:-10
                        },
                      
                    })
                    .addComponent({
                        width:400,
                        height:700,
                        center:true,
                        css:{
                            width:'100%',
                            height:'100%',
                            position:'absolute',
                            left:'50%',
                            marginLeft:-200,
                            opacity:0,
                            bottom:-10,
                            backgroundImage:'url(./src/img/gather.png)'
                        },
                        animateIn:{
                            opacity:1,
                            bottom:40
                        },
                        animateOut:{
                            opacity:0,
                            bottom:-10
                        },
                      
                    })
                    .addComponent({
                        width:600,
                        height:800,
                        center:true,
                        css:{
                            width:'100%',
                            position:'absolute',
                            left:'50%',
                            opacity:0,
                            bottom:-10,
                            backgroundImage:'url(./src/img/tiaofu.png)'
                        },
                        animateIn:{
                            opacity:1,
                            bottom:10
                        },
                        animateOut:{
                            opacity:0,
                            bottom:-10
                        },
                      
                    })
                .addPage()
                    .addComponent({
                        width:500,
                        height:700,
                        css:{
                            width:'100%',
                            height:'100%',
                            position:'absolute',
                            opacity:0,
                            bottom:-10,
                            backgroundImage:'url(./src/img/bg1.png)'
                        },
                        animateIn:{
                            opacity:1,
                            bottom:0
                        },
                        animateOut:{
                            opacity:0,
                            bottom:-10
                        },
                      
                    })
                    .addComponent({
                        width:400,
                        height:700,
                        center:true,
                        css:{
                            width:400,
                            position:'absolute',
                            left:'50%',
                            marginLeft:-200,
                            opacity:0,
                            bottom:-10,
                            backgroundImage:'url(./src/img/tanchi.jpg)'
                        },
                        animateIn:{
                            opacity:1,
                            top:100
                        },
                        animateOut:{
                            opacity:0,
                            bottom:-10
                        },
                      
                    })
                .addPage()
                    .addComponent({
                        width:500,
                        height:700,
                        css:{
                            width:'100%',
                            height:'100%',
                            position:'absolute',
                            opacity:0,
                            bottom:-10,
                            backgroundImage:'url(./src/img/bg2.png)'
                        },
                        animateIn:{
                            opacity:1,
                            bottom:0
                        },
                        animateOut:{
                            opacity:0,
                            bottom:-10
                        },
                      
                    })
                    .addComponent({
                        width:400,
                        height:700,
                        center:true,
                        css:{
                            width:400,
                            position:'absolute',
                            left:'50%',
                            marginLeft:-200,
                            opacity:0,
                            bottom:-10,
                            backgroundImage:'url(./src/img/keai.jpg)'
                        },
                        animateIn:{
                            opacity:1,
                            top:100
                        },
                        animateOut:{
                            opacity:0,
                            bottom:-10
                        },
                      
                    })
                .addPage()
                    .addComponent({
                        width:300,
                        height:450,
                        css:{
                            position:'absolute',
                            opacity:0,
                            bottom:-10,
                            backgroundImage:'url(./src/img/meigui.png)'
                        },
                        animateIn:{
                            opacity:1,
                            bottom:80
                        },
                        animateOut:{
                            opacity:0,
                            bottom:-10
                        },
                      
                    })
                    .addComponent({
                        width:700,
                        height:50,
                        text:'以此页送给我可爱的小公主!',
                        center:true,
                        css:{
                            position:'absolute',
                            top:0,
                            right:0,
                            opacity:0,
                            lineHeight:'30px',
                            textAlign:'center',
                            fontHeight:900,
                            fontWeight:'bold',
                            fontSize:'22px',
                            color:'green'
                        },
                        animateIn:{
                            opacity:1,
                            top:150
                        },
                        animateOut:{
                            opacity:0,
                            top:0
                        },
                        delay:600
                    })
                    .addComponent({
                    width: 400,
                    height: 300,
                    text:' 愿你每天开心快乐,\
                    从今往后的每一条路都是我挽着你一同走过,你要记住，无论经历的是苦是甜、是悲伤是快乐，你的身边都有我',
                    css: {
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        right:0,
                        padding: '10px 15px 10px 15px',
                        textAlign: 'justify',
                        fontSize: '18px',
                        fontWeight: '900',
                        lineHeight: '25px'
                    },
                    animateIn: {
                        opacity: 1,
                        top: 250,
                    },
                    animateOut: {
                        opacity: 0,
                        top: 0
                    },
                    delay: 1000
                })
               

            .addPage()
                .addComponent({
                    width: 1000,
                    height: 1500,
                    type:'Li',
                    css: {
                        position: 'absolute',
                        left:0,
                        right:0,
                        opacity:0,
                        background:'black'
                    },
                     animateIn: {
                        opacity: 1,
                    },
                    animateOut: {
                        opacity: 0
                    }
                })
                .addComponent({
                    width: 200,
                    height:500,
                    type:'base',
                    css: {
                        position: 'absolute',
                        left:0,
                        right:0,
                        opacity:0,
                        backgroundImage:'url(./src/img/love.png)'

                        
                    },
                     animateIn: {
                        opacity: 1,
                        bottom:0
                    },
                    animateOut: {
                        opacity: 0
                    },
                    delay:800
                })
                .addComponent({
                    width: 400,
                    height:200,
                    type:'base',
                    css: {
                        position: 'absolute',
                        right:0,
                        opacity:0,
                        backgroundImage:'url(./src/img/shao.jpg)'

                        
                    },
                     animateIn: {
                        opacity: 1,
                        bottom:30,
                        right:0
                    },
                    animateOut: {
                        opacity: 0,
                        top:0
                    },
                    delay:2000
                })
                
            .addPage()
                .addComponent({
                    width:'500',
                    height:'500',
                    type:'Heart',
                    center: true,
                    css: {
                        position: 'absolute',
                        top:'50%',
                        left:'50%',
                        opacity:0,
                        background:'black',
                        borderRadius:'50%'
                    },
                     animateIn: {
                        opacity: 1,
                    },
                    animateOut: {
                        opacity: 0
                    },
                    delay:500
                })
                        
                .addComponent({
                    width:'400',
                    height:'20',
                    type:'base',
                    text:'这个就是送你的礼物啦！',
                    center: true,
                    css: {
                        position: 'absolute',
                        top:100,
                        opacity:0,
                        fontSize:30
                           
                    },
                     animateIn: {
                        opacity: 1,
                    },
                    animateOut: {
                        opacity: 0
                    },
                    delay:500
                })
                        
                     
        .load();









