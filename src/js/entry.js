import './jqUI.js';
import './jqFP.js';

import ManageObj from './ManagePageComponent.js';


ManageObj
        .init('wrapper')
            
            .addPage('page1 index')
                .addComponent({
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
                        center:true,
                        
                        css:{
                            width:'100%',
                            height:'100%',
                            backgroundImage:'url(./src/img/together.png)'
                        }
                      
                    })
                    .addComponent({
                        width:800,
                        height:500,
                        type:'base',
                        center:true,
                        css:{
                            width:0,
                            position:'absolute',
                            opacity:0,
                            bottom:30,
                            backgroundImage:'url(./src/img/tiaofu.png)'
                        },
                        animateIn:{
                            width:400,
                            opacity:1,
                        },
                        animateOut:{
                            opacity:0,
                        },
                        delay:500
                      
                    })
                .addPage()
                    .addComponent({
                        css:{
                            width:'100%',
                            height:'100%',
                            opacity:1,
                            backgroundImage:'url(./src/img/bg1.png)'
                        }
                      
                    })
                    .addComponent({
                        width:700,
                        height:700,
                        center:true,
                        css:{
                            
                            position:'absolute',
                            opacity:0,
                            top:-10,
                            backgroundImage:'url(./src/img/tanchi.png)'
                        },
                        animateIn:{
                            opacity:1,
                            top:80
                        },
                        animateOut:{
                            opacity:0,
                            top:-10
                        },
                        delay:500,
                      
                    })
                .addPage()
                    .addComponent({
                        css:{
                            width:'100%',
                            height:'100%',
                            opacity:1,
                            backgroundImage:'url(./src/img/bg2.png)'
                        }
                      
                    })
                    .addComponent({
                        width:700,
                        height:700,
                        center:true,
                        css:{
                            
                            position:'absolute',
                            width:0,
                            opacity:0,
                            bottom:50,
                            backgroundImage:'url(./src/img/keai.png)'
                        },
                        animateIn:{
                            opacity:1,
                            top:80,
                            width:350,
                        },
                        animateOut:{
                            width:0,
                            opacity:0,
                            bottom:50,
                        },
                        delay:500,
                      
                    })
                
                .addPage()
                    .addComponent({
                        width:700,
                        height:50,
                        text:'以此页送给我最可爱的小公主!',
                        center:true,
                        css:{
                            position:'absolute',
                            top:0,
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
                            top:80
                        },
                        animateOut:{
                            opacity:0,
                            top:0
                        },
                        delay:600
                    })
                    .addComponent({
                        width: 500,
                        height: 300,
                        center:true,
                        text:' 愿你每天开心快乐,\
                        从今往后的每一条路都是我挽着你一同走过,你要记住，无论经历的是苦是甜、是悲伤是快乐，你的身边都有我!',
                        css: {
                            position: 'absolute',
                            opacity: 0,
                            top: 0,
                            right:0,
                            textAlign: 'justify',
                            textIndent:'2em',
                            fontSize: '18px',
                            fontWeight: '900',
                            lineHeight: '25px'
                        },
                        animateIn: {
                            opacity: 1,
                            top: 150,
                        },
                        animateOut: {
                            opacity: 0,
                            top: 0
                        },
                        delay: 1000
                    })
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
                            bottom:30
                        },
                        animateOut:{
                            opacity:0,
                            bottom:-10
                        },
                        delay:3000
                      
                    })
               
            .addPage()
                .addComponent({
                    type:'Li',
                    css: {
                        width:'100%',
                        height:'100%',
                        position: 'absolute',
                        background:'black'
                    }
                })
                .addComponent({
                    width: 400,
                    height:500,
                    type:'base',
                    center:true,
                    css: {
                        position: 'absolute',
                        opacity:0,
                        backgroundImage:'url(./src/img/love.png)',
                        top:10
                    },
                     animateIn: {
                        opacity: 1,
                        top:200
                    },
                    animateOut: {
                        opacity: 0,
                        top:10
                    },
                    delay:800
                })
                
            .addPage()
                .addComponent({
                    width:700,
                    height:700,
                    type:'Heart',
                    center: true,
                    css: {
                        position: 'absolute',
                        bottom:0,
                        opacity:0,
                        background:'black',
                        borderRadius:'20%'
                    },
                    animateIn:{
                        opacity:1,
                        bottom:30,
                    },
                    animateOut:{
                      opacity:0,
                      bottom:0,
                    }
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









