import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function KaynakcaScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerArea}>
                <Text style={styles.headerTitle}>Kaynakça</Text>
            </View>

            <View style={styles.contentArea}>
                <View style={styles.sourceItem}>
                    <Text style={styles.sourceTitle}>1. Dünya Sağlık Örgütü (WHO)</Text>
                    <Text style={styles.sourceLink}>Meme Kanseri Raporları (2024)</Text>
                </View>

                <View style={styles.sourceItem}>
                    <Text style={styles.sourceTitle}>2. Sağlık Bakanlığı</Text>
                    <Text style={styles.sourceLink}>Kanser Dairesi Başkanlığı İstatistikleri</Text>
                </View>

                <View style={styles.sourceItem}>
                    <Text style={styles.sourceTitle}>3. Amerikan Kanser Derneği (ACS)</Text>
                    <Text style={styles.sourceLink}>Tedavi Sonrası Kılavuzu</Text>
                </View>

                <View style={styles.sourceItem}>
                    <Text style={styles.sourceTitle}>4. Akademik Makaleler</Text>
                    <Text style={styles.sourceLink}>Meme Koruyucu Cerrahi Sonrası Psikolojik Destek</Text>
                </View>
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
        minHeight: 500,
    },
    sourceItem: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 15,
    },
    sourceTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 5,
    },
    sourceLink: {
        fontSize: 14,
        color: '#E91E63', // Pink
        fontStyle: 'italic',
    }
});
