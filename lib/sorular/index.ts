import type { TopicQuiz } from "./types";
import ardisikTurev from "./ardisik-turev";
import aritmetikDiziAyt from "./aritmetik-dizi-ayt";
import artanAzalanEkstremum from "./artan-azalan-ekstremum";
import belirliIntegralTeoremi from "./belirli-integral-teoremi";
import bileskeTersFonksiyonAyt from "./bileske-ters-fonksiyon-ayt";
import birimCemberAyt from "./birim-cember-ayt";
import cemberAnalitikAyt from "./cember-analitik-ayt";
import diziKavramiAyt from "./dizi-kavrami-ayt";
import dogruAnalitikAyt from "./dogru-analitik-ayt";
import fonksiyonCesitleriAyt from "./fonksiyon-cesitleri-ayt";
import geometrikDiziAyt from "./geometrik-dizi-ayt";
import ikinciDereceDenklemAyt from "./ikinci-derece-denklem-ayt";
import ikinciDereceEsitsizlikAyt from "./ikinci-derece-esitsizlik-ayt";
import ikinciTurevKonkavlik from "./ikinci-turev-konkavlik";
import integralDegiskenDegistirme from "./integral-degisken-degistirme";
import integralKavrami from "./integral-kavrami";
import integraldeAlan from "./integralde-alan";
import limitHesaplama from "./limit-hesaplama";
import limitKavrami from "./limit-kavrami";
import logaritmaKavramiAyt from "./logaritma-kavrami-ayt";
import logaritmikDenklemAyt from "./logaritmik-denklem-ayt";
import optimizasyon from "./optimizasyon";
import ozelFonksiyonTurevleri from "./ozel-fonksiyon-turevleri";
import ozelFonksiyonlarAyt from "./ozel-fonksiyonlar-ayt";
import parabolAyt from "./parabol-ayt";
import polinomKavramiAyt from "./polinom-kavrami-ayt";
import polinomlardaBolmeAyt from "./polinomlarda-bolme-ayt";
import sonsuzdaLimitAsimptot from "./sonsuzda-limit-asimptot";
import sureklilik from "./sureklilik";
import tegetNormal from "./teget-normal";
import trigonometrikDenklemlerAyt from "./trigonometrik-denklemler-ayt";
import trigonometrikFonksiyonlarAyt from "./trigonometrik-fonksiyonlar-ayt";
import trigonometrikOzdesliklerAyt from "./trigonometrik-ozdeslikler-ayt";
import turevAlmaKurallari from "./turev-alma-kurallari";
import turevFormulOzeti from "./turev-formul-ozeti";
import turevinTanimi from "./turevin-tanimi";
import ucgendeTrigonometriAyt from "./ucgende-trigonometri-ayt";
import ustelFonksiyonAyt from "./ustel-fonksiyon-ayt";

const BANKS: Record<string, TopicQuiz> = {
  [ardisikTurev.slug]: ardisikTurev,
  [aritmetikDiziAyt.slug]: aritmetikDiziAyt,
  [artanAzalanEkstremum.slug]: artanAzalanEkstremum,
  [belirliIntegralTeoremi.slug]: belirliIntegralTeoremi,
  [bileskeTersFonksiyonAyt.slug]: bileskeTersFonksiyonAyt,
  [birimCemberAyt.slug]: birimCemberAyt,
  [cemberAnalitikAyt.slug]: cemberAnalitikAyt,
  [diziKavramiAyt.slug]: diziKavramiAyt,
  [dogruAnalitikAyt.slug]: dogruAnalitikAyt,
  [fonksiyonCesitleriAyt.slug]: fonksiyonCesitleriAyt,
  [geometrikDiziAyt.slug]: geometrikDiziAyt,
  [ikinciDereceDenklemAyt.slug]: ikinciDereceDenklemAyt,
  [ikinciDereceEsitsizlikAyt.slug]: ikinciDereceEsitsizlikAyt,
  [ikinciTurevKonkavlik.slug]: ikinciTurevKonkavlik,
  [integralDegiskenDegistirme.slug]: integralDegiskenDegistirme,
  [integralKavrami.slug]: integralKavrami,
  [integraldeAlan.slug]: integraldeAlan,
  [limitHesaplama.slug]: limitHesaplama,
  [limitKavrami.slug]: limitKavrami,
  [logaritmaKavramiAyt.slug]: logaritmaKavramiAyt,
  [logaritmikDenklemAyt.slug]: logaritmikDenklemAyt,
  [optimizasyon.slug]: optimizasyon,
  [ozelFonksiyonTurevleri.slug]: ozelFonksiyonTurevleri,
  [ozelFonksiyonlarAyt.slug]: ozelFonksiyonlarAyt,
  [parabolAyt.slug]: parabolAyt,
  [polinomKavramiAyt.slug]: polinomKavramiAyt,
  [polinomlardaBolmeAyt.slug]: polinomlardaBolmeAyt,
  [sonsuzdaLimitAsimptot.slug]: sonsuzdaLimitAsimptot,
  [sureklilik.slug]: sureklilik,
  [tegetNormal.slug]: tegetNormal,
  [trigonometrikDenklemlerAyt.slug]: trigonometrikDenklemlerAyt,
  [trigonometrikFonksiyonlarAyt.slug]: trigonometrikFonksiyonlarAyt,
  [trigonometrikOzdesliklerAyt.slug]: trigonometrikOzdesliklerAyt,
  [turevAlmaKurallari.slug]: turevAlmaKurallari,
  [turevFormulOzeti.slug]: turevFormulOzeti,
  [turevinTanimi.slug]: turevinTanimi,
  [ucgendeTrigonometriAyt.slug]: ucgendeTrigonometriAyt,
  [ustelFonksiyonAyt.slug]: ustelFonksiyonAyt,
};

export function getQuiz(slug: string): TopicQuiz | undefined {
  return BANKS[slug];
}

/** Real question count for a topic, or undefined if it has no bank yet. */
export function getQuizCount(slug: string): number | undefined {
  return BANKS[slug]?.questions.length;
}

export type { TopicQuiz, QuizQuestion } from "./types";
