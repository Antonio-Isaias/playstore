import React from "react";
import{TouchableOpacity, StyleSheet, Text, Image } from "react-native";

export default function Destaques({titulo, legenda, imagem}) {
    return (
        <TouchableOpacity style={estilo.containerDestaques}>
            <Image
            style={estilo.images}
            source={require(`../../imagens/${imagem}`)}/>
            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.legenda}>{legenda}</Text>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    containerDestaques: {
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        alignItems: "center",
        justifyContent: "space-between",
        width:300,
        height: 250,
        marginLeft: 8,
    },
    titulo: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
    },
    legenda: {
        color: "green",
        fontSize: 14,
        marginLeft: 29,
        marginTop: 2,
        fontWeight: "bold",
        alignItems:"flex-end",
        marginLeft:200,
    },
    images: {
        width: "110%",
        height: 125,
        borderRadius: 4,
    },
})