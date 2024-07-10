import supabase from './db.js';

export default async function handler(req,res) {
  try {
    if (req.method === 'GET') {
      const { rollNo } = req.query;

      const { data,error } = await supabase
        .from('attendance_details')
        .select('Subject_ID, PorA, Date_marked')
        .eq('Roll_No',rollNo);

      if (error) {
        throw error;
      }

      if (data.length === 0) {
        // Return a response with 0% for each subject if no data is found
        const emptyResponse = [
          { "Subject_ID": "CCC708","Percentage": 0 },
          { "Subject_ID": "CSD101","Percentage": 0 },
          { "Subject_ID": "CSD102","Percentage": 0 },
          { "Subject_ID": "CSD311","Percentage": 0 },
          { "Subject_ID": "MAT376","Percentage": 0 },
          // Add more subjects as needed
        ];
        res.status(200).json(emptyResponse);
      } else {
        // Calculate the percentage
        const percentages = data.reduce((acc,curr) => {
          if (!acc[curr.Subject_ID]) {
            acc[curr.Subject_ID] = { present: 0,total: 0 };
          }
          if (curr.PorA === 'P') {
            acc[curr.Subject_ID].present += 1;
          }
          acc[curr.Subject_ID].total += 1;
          return acc;
        },{});

        const result = Object.keys(percentages).map(subject => ({
          Subject_ID: subject,
          Percentage: (percentages[subject].present / percentages[subject].total) * 100
        }));

        res.status(200).json(result);
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data',details: error.message });
  } finally {
    res.end();
  }
};
