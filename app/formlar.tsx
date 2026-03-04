import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Accordion from '../components/Accordion';

export default function FormlarScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerArea}>
                <Text style={styles.headerTitle}>Formlar ve Ölçekler</Text>
            </View>

            <View style={styles.contentArea}>
                <Accordion title="Kişisel Bilgi Formu">
                    <TouchableOpacity onPress={() => Alert.alert('Kişisel Bilgi Formu', 'Bu form daha önce doldurulmuş.')} activeOpacity={0.7}>
                        <Text style={styles.descriptionText}>
                            Bu araştırma meme kanserinde meme koruyucu cerrahi geçirmiş kadınlara
                            yönelik geliştirilen mobil uygulama ile verilen eğitimin bireylerin destekleyici
                            bakım gereksinimleri ve yaşam kalitesi düzeylerine etkisini belirlemek
                            amacıyla randomize kontrollü olarak planlanmıştır. Sonuçların güvenirliği
                            açısından lütfen size en uygun seçeneği işaretleyiniz ve tüm soruları
                            cevaplayınız. Ankete isim yazmayınız. Katkılarınız için teşekkür ederiz.
                        </Text>

                        <View style={styles.statusBox}>
                            <Text style={styles.statusText}>14 gün önce Tamamlandı</Text>
                            <Ionicons name="chevron-forward-circle" size={24} color="white" />
                        </View>
                    </TouchableOpacity>
                </Accordion>

                <Accordion title="Destekleyici Bakım Gereksinimleri Ölçeği Kısa Formu (DBGÖ-KF)">
                    <TouchableOpacity onPress={() => Alert.alert('Form Yükleniyor', 'Bu form yakında aktif edilecek.')}>
                        <Text style={styles.descriptionText}>Form detayı için tıklayınız...</Text>
                    </TouchableOpacity>
                </Accordion>

                <Accordion title="Dünya Sağlık Örgütü Yaşam Kalitesi Ölçeği">
                    <TouchableOpacity onPress={() => Alert.alert('Form Yükleniyor', 'Bu form yakında aktif edilecek.')}>
                        <Text style={styles.descriptionText}>Form detayı için tıklayınız...</Text>
                    </TouchableOpacity>
                </Accordion>
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
        padding: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    descriptionText: {
        fontSize: 12,
        color: '#666',
        lineHeight: 18,
        marginBottom: 15,
    },
    statusBox: {
        backgroundColor: '#E91E63',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 8,
        marginTop: 10,
    },
    statusText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
