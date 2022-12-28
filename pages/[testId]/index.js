import styles from '../../styles/index.module.scss'
import connect2db from '../../lib/mongodb';
import { useEffect, useState } from 'react';
import TestHeader from '../../components/testHeader/Testheader';
import Sidebar from '../../components/sidebar/Sidebar';
import Timer from '../../components/timer/Timer';
import Question from '../../components/question/question';
import { useRouter } from 'next/router';
import Button from '../../components/buttons/Button';
import BigButton from '../../components/bigButtons/BigButton';

export default function Home(props) {
const router = useRouter()
const {testId} = router.query
  const test = props.tests[testId - 1]
  
  return (
    !testId ? <>bugged</> :
    <div className={styles.container}>
      <Sidebar questions={[]}/>
      <div className={styles.container__inner}>
      <TestHeader testTheme={test.title} questionNumber={'x/x'}/>
      <div className={styles.startButton}><BigButton text={'Начать тест'} action={() => router.push(`/${testId}/1`)}/></div>
      </div>
    </div>


  )
}

export const getServerSideProps = async () => ({
  props: {
    tests: JSON.parse(
      JSON.stringify(
        await (await connect2db()).db.collection("tests").find({}).toArray()
      )
    )
  },
});
