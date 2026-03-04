import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface RadioOptionProps {
    label: string;
    selected: boolean;
    onSelect: () => void;
}

const RadioOption = ({ label, selected, onSelect }: RadioOptionProps) => (
    <TouchableOpacity style={styles.radioContainer} onPress={onSelect} activeOpacity={0.7}>
        <View style={styles.radioOuter}>
            {selected && <View style={styles.radioInner} />}
        </View>
        <Text style={styles.radioText}>{label}</Text>
    </TouchableOpacity>
);

interface QuestionProps {
    title: string;
    value: boolean | null;
    onChange: (val: boolean) => void;
}

const QuestionRow = ({ title, value, onChange }: QuestionProps) => (
    <View style={styles.questionRow}>
        <Text style={styles.questionTitle}>{title}</Text>
        <View style={styles.optionsContainer}>
            <RadioOption label="Evet" selected={value === true} onSelect={() => onChange(true)} />
            <RadioOption label="Hayır" selected={value === false} onSelect={() => onChange(false)} />
        </View>
    </View>
);

export default function NasilHissediyorumScreen() {
    const router = useRouter();
    const [answers, setAnswers] = useState({
        agri: null as boolean | null,
        yorgunluk: null as boolean | null,
        uyku: null as boolean | null,
        kaygi: null as boolean | null,
        yeme: null as boolean | null,
    });

    const handleSave = () => {
        // Save form logic here
        router.back();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerArea}>
                <Text style={styles.mainTitle}>Kendinize Uygun Şekilde Formu</Text>
                <Text style={styles.subTitle}>Doldurunuz</Text>
            </View>

            <View style={styles.formCard}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <QuestionRow
                        title="Ağrı"
                        value={answers.agri}
                        onChange={(val) => setAnswers({ ...answers, agri: val })}
                    />
                    <QuestionRow
                        title="Yorgunluk"
                        value={answers.yorgunluk}
                        onChange={(val) => setAnswers({ ...answers, yorgunluk: val })}
                    />
                    <QuestionRow
                        title="Uyku ile ilgili sorunlar"
                        value={answers.uyku}
                        onChange={(val) => setAnswers({ ...answers, uyku: val })}
                    />
                    <QuestionRow
                        title="Kaygı - Stres"
                        value={answers.kaygi}
                        onChange={(val) => setAnswers({ ...answers, kaygi: val })}
                    />
                    <QuestionRow
                        title="Yeme ile ilgili"
                        value={answers.yeme}
                        onChange={(val) => setAnswers({ ...answers, yeme: val })}
                    />

                    <TouchableOpacity style={styles.submitButton} onPress={handleSave}>
                        <Text style={styles.submitButtonText}>Formu Kaydet</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E91E63', // Pink background for top area
    },
    headerArea: {
        padding: 20,
        paddingTop: 10,
        paddingBottom: 30,
    },
    mainTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    subTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    formCard: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
        paddingHorizontal: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    scrollContent: {
        paddingBottom: 40,
    },
    questionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    questionTitle: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
    },
    optionsContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 100,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    radioOuter: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#999',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    radioInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#666',
    },
    radioText: {
        fontSize: 14,
        color: '#666',
    },
    submitButton: {
        marginTop: 40,
        borderWidth: 1,
        borderColor: '#E91E63',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#E91E63',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
