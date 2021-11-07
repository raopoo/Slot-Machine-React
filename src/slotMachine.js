const SlotMachine = (props) => {
  const { s1, s2, s3 } = props;
  let winner;
  if (s1 === s2 && s2 === s3) {
    winner = true;
  } else winner = false;
  return (
    <div>
      <h3>
        s1={s1} s2={s2} s3={s3}
      </h3>
      <h2>You {winner ? "Win!!" : "Lose!"}</h2>
    </div>
  );
};
export default SlotMachine;