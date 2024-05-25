import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { PieChart,BarChart,ContributionGraph, LineChart } from 'react-native-chart-kit';
const screenWidth = Dimensions.get("window").width;

const DetailBox = ({ heading, icon, score }) => (
  <View style={styles.detailBox}>
    <Text style={styles.detailHeading}>{heading}</Text>
    <Text style={styles.detailIcon}>{icon}</Text>
    <Text style={styles.detailScore}>{score}</Text>
  </View>
);

export default function App() {
  const submissionsData = [
    { name: 'Accepted', count: 122, color: '#4caf50', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Wrong Answer', count: 210, color: '#f44336', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Time Limit Exceeded', count: 34, color: '#ff9800', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Runtime Error', count: 12, color: '#9c27b0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Server Error', count: 4, color: '#2196f3', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Compilation Error', count: 8, color: '#ffeb3b', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Execution Engine Error', count: 6, color: '#795548', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Duplicate', count: 2, color: '#607d8b', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];
  const languageData = {
    labels: ['C/C++', 'Java', 'Python', 'JavaScript', 'C#'],
    datasets: [
      {
        data: [30, 200, 50, 10, 5],
        colors: [
          (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,  // C/C++
          (opacity = 1) => `rgba(255, 193, 7, ${opacity})`,  // Java
          (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,  // Python
          (opacity = 1) => `rgba(220, 53, 69, ${opacity})`,  // JavaScript
          (opacity = 1) => `rgba(23, 162, 184, ${opacity})`, // C#
        ],
      },
    ],
  };

  const tagWiseSubmissions = [
    { name: 'tree', count: 10, color: '#6495ed' },
    { name: 'adjacency-list', count: 1, color: '#006400' },
    { name: 'string', count: 6, color: '#00008b' },
    { name: 'prefix-sum', count: 5, color: '#ffd700' },
    { name: 'data-stream', count: 1, color: '#ff00ff' },
    { name: 'design', count: 2, color: '#8a2be2' },
    { name: 'heap-priority-queue', count: 2, color: '#a52a2a' },
    { name: 'greedy', count: 1, color: '#32cd32' },
    { name: 'set', count: 2, color: '#008080' },
    { name: 'modulo-arithmetic', count: 4, color: '#ff69b4' },
    { name: 'number-theory', count: 2, color: '#4682b4' },
    { name: 'interactive', count: 1, color: '#ffa07a' },
    { name: 'bit-manipulation', count: 3, color: '#20b2aa' },
    { name: 'custom-sort', count: 1, color: '#f4a460' },
  ];

  const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  const tagWiseSubmissionsData = tagWiseSubmissions.map((item, index) => ({
    name: item.name,
    count: item.count,
    color: item.color,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  }));

  const solvedProblems = [
    'Resultant Number After K Operations',
    'Level Order Traversal',
    'Vamsi and Chocolates',
    'Merging Arrays',
    'Minimum Poison Duration',
    'Island Perimeter',
    'Most Frequent Character',
    'Express as a power b',
    'A Summatory',
    'Find Bottom Left Tree Value',
    'REPEATED and MISSING Element (No prohibited Keyword)',
    'Tree Adjacency List from Parent Array',
    'Majority Element',
    'Parent Array of Tree',
    'Count Primes In Range',
    'Letters of Alphabets',
    'Depth of N-ary Tree',
    'Prefix Sum Array',
    'Kth Largest Element in a Stream',
    'Assignments!!',
    'Make Them Equal',
    'Last Digit of X power N',
    'Chocolate distribution per row',
    'Fibonacci Queries',
    'Smallest Number that does not divide N',
    'BFS of Tree from Leaf Nodes',
    'Mysterious Game',
    'DFS of Tree',
    'X 1s and Y 0s Bits',
    'Row with max 1s',
    'Digit Sum Sort',
    'Run to impress',
    'Even Division',
    'Modulo Arithmetic - 1',
    'Exclusion Product',
    'Right View of Tree',
    'Hated Words',
    'Partition List',
    'Allocate Books',
    'ZigZag Level Order Traversal',
    'Vertical Order traversal of Binary Tree',
    'Binary Search Tree Iterator',
    'Diameter of a Tree',
    'Print Tree as Adjacency List',
    'Highest value of a matrix',
    'Heap Sort the Given Array',
    'Prime Row Numbers Modulo Sum',
    'Right Angled triangle pattern',
    'The Spruce',
    'Locate Cell of X',
    'Fencing',
    'Catch Summer Vacations',
    'Range Sum from Suffix Sum Array',
    'BFS of Tree from Root',
    'Count Triangles',
    'Find MyList Size',
  ];
  const unsolvedProblems = [
    'ZeroNacci Series', 
    'Floor Division',
    'Finding Frequency',
    'Equalize Array Elements',
    'Max Area of Island', 
    'Static Range Sum Queries', 
    'Do Nothing Find Common', 
    'X and Y set bits',
    ];

    const subscribedCourses = [
      'GNITS-Y22-PHASE-2', 
      'BVRITH-Y21-PHASE-2',
      'Finding Frequency',
      'Tree BootCamp -60',
      ];
    const commitsData = [
        { date: "2024-01-02", count: 1 },
        { date: "2024-01-03", count: 2 },
        { date: "2024-01-04", count: 3 },
        { date: "2024-01-05", count: 4 },
        { date: "2024-01-06", count: 5 },
        { date: "2024-01-30", count: 2 },
        { date: "2024-01-31", count: 3 },
        { date: "2024-03-01", count: 2 },
        { date: "2024-04-02", count: 4 },
        { date: "2024-03-05", count: 2 },
        { date: "2024-05-24", count: 2 },
        { date: "2024-05-20", count: 4 },
        { date: "2024-06-01", count: 4 },
      ];
      const data = {
        labels: ["17/05/2024","23/05/2024", "31/05/2024", "7/06/2024"],
        datasets: [
          {
            data: [600, 645, 528, 580],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Speed and Accuracy contest"] // optional
      };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <View style={styles.container}>
          <View style={styles.profileBox}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/150' }} 
              style={styles.profileImage} 
            />
            <Text style={styles.profileName}>Lahari Pasunuti</Text>
            <Text style={styles.profileUsername}>bz-lahari</Text>
            <Text style={styles.profileEmail}>lahari.pasunuti@gmail.com</Text>
            <Text style={styles.profileBio}>Bio</Text>
            <View style={styles.profileDetailContainer}>
              <Text style={styles.boldText}>Coding Language:</Text> 
              <Text style={styles.profileDetail}>C, Python, Java</Text>
            </View>
            <View style={styles.profileDetailContainer}>
              <Text style={styles.boldText}>Year Of Graduation:</Text>
              <Text style={styles.profileDetail}>2025</Text>
            </View>
            <View style={styles.profileDetailContainer}>
              <Text style={styles.boldText}>College:</Text> 
              <Text style={styles.profileDetail}>BVRIT HYDERABAD</Text>
            </View>
            <View style={styles.profileDetailContainer}>
              <Text style={styles.boldText}>Stream:</Text> 
              <Text style={styles.profileDetail}>CSE (AI & ML)</Text>
            </View>
            <View style={styles.profileDetailContainer}>
              <Text style={styles.boldText}>College Id:</Text>
              <Text style={styles.profileDetail}>21wh1a6652</Text>
            </View>
            <View style={styles.profileDetailContainer}>
              <Text style={styles.boldText}>CGPA:</Text>
              <Text style={styles.profileDetail}>8.77</Text>
            </View>
            <View style={styles.profileDetailContainer}>
              <Text style={styles.boldText}>Active Backlogs:</Text> 
              <Text style={styles.profileDetail}>0</Text>
            </View>
            <View style={styles.profileDetailContainer}>
              <Text style={styles.boldText}>Mobile:</Text>
              <Text style={styles.profileDetail}>7207425460</Text>
            </View>
          </View>
          <Text style={styles.overallSummaryHeading}>Overall Summary</Text>
          <View style={styles.additionalDetailsBox}>
            <DetailBox heading="Problems Solved" icon="🔢" score="77" />
            <DetailBox heading="Problems Attempted" icon="💡" score="91" />
            <DetailBox heading="Contests Participated" icon="🏆" score="0" />
            <DetailBox heading="Accuracy" icon="📊" score="35.16%" />
            <DetailBox heading="Max Problems Solved In A Day" icon="✅" score="9" />
            <DetailBox heading="Last Submission" icon="📅" score="a day ago" />
            <DetailBox heading="Longest Streak" icon="🔥" score="9" />
            <DetailBox heading="Current Streak" icon="⚡" score="3" />
            <DetailBox heading="Rating" icon="⭐" score="0" />
          </View>
          <Text style={styles.chartHeading}>Rating Graph</Text>
          <LineChart
                  data={data}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
          />
          <Text style={styles.chartHeading}>Submissions</Text>
          <PieChart
            data={submissionsData}
            width={Dimensions.get('window').width - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            accessor="count"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
          <Text style={styles.chartHeading}>Language Wise Submissions</Text>
          <BarChart
            data={{
              labels: languageData.labels,
              datasets: [
                {
                  data: languageData.datasets[0].data,
                },
              ],
            }}
            width={Dimensions.get('window').width - 40}
            height={220}
            yAxisLabel=""
            chartConfig={{
              ...chartConfig,
              barColors: languageData.datasets[0].colors,
            }}
            verticalLabelRotation={30}
          />
          <Text style={styles.chartHeading}>Tag Wise Submissions</Text>
          <PieChart
            data={tagWiseSubmissionsData}
            width={Dimensions.get('window').width }
            height={280}
            chartConfig={{
              ...chartConfig,
              color: (opacity = 1, index) => tagWiseSubmissionsData[index]?.color || '#ffffff',
            }}
            accessor="count"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
          <Text style={styles.chartHeading}>Solved Problems</Text>
          <ScrollView horizontal style={styles.solvedProblemsContainer} >
            <View style={styles.solvedProblemsContainer}>
              {solvedProblems.map((problem, index) => (
                <View key={index} style={styles.solvedProblem}>
                  <Text style={styles.solvedProblemText}>{problem}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
          <Text style={styles.chartHeading}>Unsolved Problems</Text>
          <ScrollView horizontal  style={styles.unsolvedProblemsContainer}>
            <View style={styles.unsolvedProblemsContainer}>
              {unsolvedProblems.map((problem, index) => (
                <View key={index} style={styles.unsolvedProblem}>
                  <Text style={styles.unsolvedProblemText}>{problem}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
          <Text style={styles.chartHeading}>Subscribed Courses</Text>
          <ScrollView horizontal  style={styles.subscribedCoursesContainer}>
            <View style={styles.subscribedCoursesContainer}>
              {subscribedCourses.map((course, index) => (
                <View key={index} style={styles.subscribedCourses}>
                  <Text style={styles.subscribedCoursesText}>{course}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
          <Text style = {styles.chartHeading}>Activity In The Year</Text>
          <ScrollView horizontal>

          <ContributionGraph
                values={commitsData}
                endDate={new Date("2024-06-06")}
                numDays={105}
                width={500}
                height={220}
                chartConfig={chartConfig}
          />
          </ScrollView>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileUsername: {
    fontSize: 20,
    color: '#555',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },
  profileBio: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileDetailContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  profileDetail: {
    fontSize: 18,
    color: '#666',
  },
  boldText: {
    fontWeight: 'bold',
  },
  overallSummaryHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  additionalDetailsBox: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  detailBox: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  detailScore: {
    fontSize: 18,
  },
  chartHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  solvedProblemsContainer:{
    width : '100%',
  },
  unsolvedProblemsContainer:{
    width : '100%',
  },
  subscribedCoursesContainer:{
    width : '100%',
  },

});
