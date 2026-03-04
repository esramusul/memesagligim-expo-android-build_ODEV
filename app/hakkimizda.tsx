import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HakkimizdaScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerArea}>
                <Text style={styles.headerTitle}>Hakkımızda</Text>
            </View>

            <View style={styles.contentArea}>
                <Text style={styles.paragraph}>
                    Bu uygulama, meme kanserinde koruyucu cerrahi geçirmiş kadınlara yönelik
                    geliştirilen bir eğitim ve takip platformudur.
                </Text>

                <Text style={styles.paragraph}>
                    Amacımız hastalarımızın yaşam kalitesini artırmak, onlara destekleyici
                    bakım gereksinimlerinde yardımcı olmak ve doğru bilgileri hızlı bir
                    şekilde ulaştırmaktır.
                </Text>

                <Text style={styles.subtitle}>Ekibimiz</Text>
                <Text style={styles.paragraph}>
                    Uzman doktorlar, psikologlar ve yazılım geliştiricilerinden oluşan
                    multidisipliner bir ekibiz.
                </Text>

                <Text style={styles.subtitle}>Vizyonumuz</Text>
                <Text style={styles.paragraph}>
                    Meme sağlığı konusunda farkındalığı artırmak ve tedavi sonrası
                    izlem sürecini hastalarımız için daha kolay ve şeffaf hale getirmek.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E91E63',
    },
    headerArea: {
        padding: 30,
        paddingTop: 10,
        paddingBottom: 40,
    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    contentArea: {
        flex: 1,
        padding: 30,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        minHeight: 500, // ensure card stretches
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#C86CDA', // Purple theme color
        marginTop: 20,
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 15,
        color: '#444',
        lineHeight: 24,
        marginBottom: 15,
        textAlign: 'justify',
    },
});
