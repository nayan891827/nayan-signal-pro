import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "./firebaseConfig";

const db = getFirestore(app);

export async function fetchSignals(mode) {
  const querySnapshot = await getDocs(collection(db, "signals"));
  return querySnapshot.docs
    .map((doc) => doc.data())
    .filter((signal) => signal.mode === mode);
}

export async function fetchTrendlines(mode) {
  const querySnapshot = await getDocs(collection(db, "trendlines"));
  return querySnapshot.docs
    .map((doc) => doc.data())
    .filter((trend) => trend.mode === mode);
}

export async function fetchCandlestickPatterns(mode) {
  const querySnapshot = await getDocs(collection(db, "candlesticks"));
  return querySnapshot.docs
    .map((doc) => doc.data())
    .filter((candle) => candle.mode === mode);
}

export async function fetchChartPatterns(mode) {
  const querySnapshot = await getDocs(collection(db, "chartpatterns"));
  return querySnapshot.docs
    .map((doc) => doc.data())
    .filter((pattern) => pattern.mode === mode);
}

export async function fetchBreakouts(mode) {
  const querySnapshot = await getDocs(collection(db, "breakouts"));
  return querySnapshot.docs
    .map((doc) => doc.data())
    .filter((item) => item.mode === mode);
}

export async function fetchFakeouts(mode) {
  const querySnapshot = await getDocs(collection(db, "fakeouts"));
  return querySnapshot.docs
    .map((doc) => doc.data())
    .filter((fakeout) => fakeout.mode === mode);
}

export async function fetchLiquidityZones(mode) {
  const querySnapshot = await getDocs(collection(db, "liquidity"));
  return querySnapshot.docs
    .map((doc) => doc.data())
    .filter((zone) => zone.mode === mode);
}

export async function fetchBOS(mode) {
  const querySnapshot = await getDocs(collection(db, "bos"));
  return querySnapshot.docs
    .map((doc) => doc.data())
    .filter((bos) => bos.mode === mode);
}

export async function fetchChochs(mode) {
  const querySnapshot = await getDocs(collection(db, "chochs"));
  return querySnapshot.docs
    .map((doc) => doc.data())
    .filter((choch) => choch.mode === mode);
}


export async function fetchOrderBlocks(mode) {
  const querySnapshot = await getDocs(collection(db, "orderblocks"));
  return querySnapshot.docs
    .map((doc) => doc.data())
    .filter((ob) => ob.mode === mode);
}


export async function fetchFvgs(mode) {
  const querySnapshot = await getDocs(collection(db, "fvgs"));
  return querySnapshot.docs
    .map((doc) => doc.data())
    .filter((fvg) => fvg.mode === mode);
}


export async function fetchPremiumZones(mode) {
  const querySnapshot = await getDocs(collection(db, "premiumzones"));
  return querySnapshot.docs
    .map((doc) => doc.data())
    .filter((zone) => zone.mode === mode);
}

export async function fetchMitigations(mode) {
  const querySnapshot = await getDocs(collection(db, "mitigations"));
  return querySnapshot.docs
    .map((doc) => doc.data())
    .filter((entry) => entry.mode === mode);
}