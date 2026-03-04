import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function GunlukIpucuScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.countContainer}>
                <Text style={styles.countText}>İpucu Sayısı: 13</Text>
            </View>

            <View style={styles.tipItem}>
                <Text style={styles.tipCategory}>Yorgunluk</Text>
                <Text style={styles.tipDate}>2 ay önce</Text>
                <Text style={styles.tipContent}>
                    öneri : Aşırı yorulmamak için günlük aktivitelerinizi planlayın. Gün içinde kısa dinlenme aralıkları ayırın. Yorucu işlerden kaçının.
                </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.tipItem}>
                <Text style={styles.tipCategory}>Yorgunluk</Text>
                <Text style={styles.tipDate}>2 ay önce</Text>
                <Text style={styles.tipContent}>
                    öneri : Yeşil, lifli sebzeler, kırmızı et, karaciğer gibi demir açısından zengin gıdalar alın.
                </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.tipItem}>
                <Text style={styles.tipCategory}>Yorgunluk</Text>
                <Text style={styles.tipDate}>2 ay önce</Text>
                <Text style={styles.tipContent}>
                    öneri : Ayağa kalkarken baş dönmesini önleyebilmek için yavaş hareket edin.
                </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.tipItem}>
                <Text style={styles.tipCategory}>Uyku ile ilgili sorunlar</Text>
                <Text style={styles.tipDate}>2 ay önce</Text>
                <Text style={styles.tipContent}>
                    öneri : Tamamlayıcı terapiler (yoga, meditasyon, relaksasyon, hipnoz vb.), egzersiz gibi farkındalık tabanlı stres azaltıcı yöntemler uyku sorunlarınızın önlenmesinde etkilidir.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    countContainer: {
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    countText: {
        color: '#E91E63',
        fontWeight: 'bold',
        fontSize: 16,
    },
    tipItem: {
        padding: 20,
    },
    tipCategory: {
        color: '#AA66CC', // Light purple
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    tipDate: {
        color: '#ccc',
        fontSize: 12,
        marginBottom: 15,
    },
    tipContent: {
        color: '#E91E63', // Pinkish text for tips
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
    },
    divider: {
        height: 1,
        backgroundColor: '#f0f0f0',
        marginHorizontal: 20,
    },
});
