import React from 'react';

class ToDoList extends React.Component {


    render() {
        return ( <
            div className = "note pb-2" >
            <
            div className = "note-header" >
            <
            h1 className = "apple" > Daily ToDoList < /h1> <
            /div> <
            div id = "ToDoList"
            className = "note note-body stack" >
            <
            ul >
            <
            li >
            <
            div className = "content-check" >
            <
            p > Prendre une douche < /p> <
            input type = "checkbox" / >
            <
            /div> <
            /li> <
            li >
            <
            div className = "content-check" >
            <
            p > Prendre un petit dej < /p> <
            input type = "checkbox" / >
            <
            /div> <
            /li> <
            li >
            <
            div className = "content-check" >
            <
            p > Travailler 2 h sur le site < /p> <
            input type = "checkbox" / >
            <
            /div> <
            /li> <
            li >
            <
            div className = "content-check" >
            <
            p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse corrupti accusamus at eveniet aspernatur officia.Suscipit possimus beatae reprehenderit consequatur omnis totam eaque, doloribus eius ex deleniti repudiandae sapiente accusamus. < /p> <
            input type = "checkbox" / >
            <
            /div> <
            /li> <
            li >
            <
            div className = "content-check" >

            <
            p >
            <
            textarea class = "form-control stack content-value"
            rows = "" >
            J 'écris de la merde histoire de tester cette fonctionnalité éclatée de mon site sah !
            Petit saut de ligne pour tester la casse des lignes...Une de plus histoire de faire bien chier. <
            /textarea>


            <
            /p>

            <
            input type = "checkbox" / >
            <
            /div> <
            /li> <
            li >
            <
            div className = "content-check" >
            <
            p > < /p> <
            input type = "checkbox" / >
            <
            /div> <
            /li> <
            li >
            <
            div className = "content-check" >
            <
            p > < /p> <
            input type = "checkbox" / >
            <
            /div> <
            /li> <
            /ul> <
            /div> <
            /div>

        );
    }
}


export default ToDoList;
