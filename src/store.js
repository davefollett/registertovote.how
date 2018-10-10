import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stateList: [
      {
        'name': 'Alabama',
        'abbreviation': 'AL',
        'url': 'https://sos.alabama.gov/alabama-votes/voter/register-to-vote'
      },
      {
        'name': 'Alaska',
        'abbreviation': 'AK',
        'url': 'https://voterregistration.alaska.gov/'
      },
      {
        'name': 'Arizona',
        'abbreviation': 'AZ',
        'url': 'https://azsos.gov/elections/voting-election/register-vote-or-update-your-current-voter-information'
      },
      {
        'name': 'Arkansas',
        'abbreviation': 'AR',
        'url': 'https://www.sos.arkansas.gov/elections/voter-information/voter-registration-information'
      },
      {
        'name': 'California',
        'abbreviation': 'CA',
        'url': 'https://registertovote.ca.gov/'
      },
      {
        'name': 'Colorado',
        'abbreviation': 'CO',
        'url': 'https://www.sos.state.co.us/voter/pages/pub/olvr/findVoterReg.xhtml'
      },
      {
        'name': 'Connecticut',
        'abbreviation': 'CT',
        'url': 'https://voterregistration.ct.gov/'
      },
      {
        'name': 'Delaware',
        'abbreviation': 'DE',
        'url': 'https://electionsncc.delaware.gov/votreg.shtml'
      },
      {
        'name': 'District Of Columbia',
        'abbreviation': 'DC',
        'url': 'https://www.dcboe.org/Voters/Register-To-Vote/Check-Voter-Registration-Status'
      },
      {
        'name': 'Florida',
        'abbreviation': 'FL',
        'url': 'https://registertovoteflorida.gov'
      },
      {
        'name': 'Georgia',
        'abbreviation': 'GA',
        'url': 'https://registertovote.sos.ga.gov/'
      },
      {
        'name': 'Hawaii',
        'abbreviation': 'HI',
        'url': 'https://olvr.hawaii.gov/'
      },
      {
        'name': 'Idaho',
        'abbreviation': 'ID',
        'url': 'https://apps.idahovotes.gov/OnlineVoterRegistration'
      },
      {
        'name': 'Illinois',
        'abbreviation': 'IL',
        'url': 'https://ova.elections.il.gov/'
      },
      {
        'name': 'Indiana',
        'abbreviation': 'IN',
        'url': 'https://www.in.gov/sos/elections/2403.htm'
      },
      {
        'name': 'Iowa',
        'abbreviation': 'IA',
        'url': 'https://sos.iowa.gov/elections/voterinformation/voterregistration.html'
      },
      {
        'name': 'Kansas',
        'abbreviation': 'KS',
        'url': 'https://www.kdor.ks.gov/apps/voterreg/default.aspx'
      },
      {
        'name': 'Kentucky',
        'abbreviation': 'KY',
        'url': 'https://elect.ky.gov/registertovote/Pages/default.aspx'
      },
      {
        'name': 'Louisiana',
        'abbreviation': 'LA',
        'url': 'https://www.sos.la.gov/ElectionsAndVoting/Pages/OnlineVoterRegistration.aspx?'
      },
      {
        'name': 'Maine',
        'abbreviation': 'ME',
        'url': 'https://www.maine.gov/sos/cec/elec/voter-info/voterguide.html'
      },
      {
        'name': 'Maryland',
        'abbreviation': 'MD',
        'url': 'https://elections.maryland.gov/voter_registration/index.html'
      },
      {
        'name': 'Massachusetts',
        'abbreviation': 'MA',
        'url': 'https://www.sec.state.ma.us/ovr/'
      },
      {
        'name': 'Michigan',
        'abbreviation': 'MI',
        'url': 'https://www.michigan.gov/sos/0,4670,7-127-1633_8716_8726_47669-175878--,00.html'
      },
      {
        'name': 'Minnesota',
        'abbreviation': 'MN',
        'url': 'http://vote.minneapolismn.gov/voters/register'
      },
      {
        'name': 'Mississippi',
        'abbreviation': 'MS',
        'url': 'https://www.sos.ms.gov/Elections-Voting/Pages/Voter-Registration-Information.aspx'
      },
      {
        'name': 'Missouri',
        'abbreviation': 'MO',
        'url': 'https://www.sos.mo.gov/elections/govotemissouri/register'
      },
      {
        'name': 'Montana',
        'abbreviation': 'MT',
        'url': 'https://sosmt.gov/elections/vote/'
      },
      {
        'name': 'Nebraska',
        'abbreviation': 'NE',
        'url': 'https://www.nebraska.gov/apps-sos-voter-registration/'
      },
      {
        'name': 'Nevada',
        'abbreviation': 'NV',
        'url': 'https://www.nvsos.gov/sosvoterservices/Registration/Step0.aspx'
      },
      {
        'name': 'New Hampshire',
        'abbreviation': 'NH',
        'url': 'http://sos.nh.gov/HowRegVote.aspx'
      },
      {
        'name': 'New Jersey',
        'abbreviation': 'NJ',
        'url': 'https://www.state.nj.us/state/elections/voting-information.html'
      },
      {
        'name': 'New Mexico',
        'abbreviation': 'NM',
        'url': 'http://www.sos.state.nm.us/Voter_Information/Voter_Registration_Information.aspx'
      },
      {
        'name': 'New York',
        'abbreviation': 'NY',
        'url': 'https://www.ny.gov/services/register-vote'
      },
      {
        'name': 'North Carolina',
        'abbreviation': 'NC',
        'url': 'https://www.ncsbe.gov/Voters/Registering-to-Vote'
      },
      {
        'name': 'North Dakota',
        'abbreviation': 'ND',
        'url': 'https://vip.sos.nd.gov/'
      },
      {
        'name': 'Ohio',
        'abbreviation': 'OH',
        'url': 'https://www.sos.state.oh.us/elections/voters/register/'
      },
      {
        'name': 'Oklahoma',
        'abbreviation': 'OK',
        'url': 'https://www.ok.gov/elections/Voter_Info/Register_to_Vote/'
      },
      {
        'name': 'Oregon',
        'abbreviation': 'OR',
        'url': 'https://sos.oregon.gov/voting/pages/updatevoterregistration.aspx'
      },
      {
        'name': 'Pennsylvania',
        'abbreviation': 'PA',
        'url': 'https://www.pavoterservices.pa.gov/pages/VoterRegistrationApplication.aspx'
      },
      {
        'name': 'Rhode Island',
        'abbreviation': 'RI',
        'url': 'http://www.elections.state.ri.us/voting/registration.php'
      },
      {
        'name': 'South Carolina',
        'abbreviation': 'SC',
        'url': 'https://info.scvotes.sc.gov/eng/ovr/start.aspx'
      },
      {
        'name': 'South Dakota',
        'abbreviation': 'SD',
        'url': 'https://sdsos.gov/elections-voting/'
      },
      {
        'name': 'Tennessee',
        'abbreviation': 'TN',
        'url': 'https://sos.tn.gov/products/elections/register-vote'
      },
      {
        'name': 'Texas',
        'abbreviation': 'TX',
        'url': 'https://www.votetexas.gov/register-to-vote/'
      },
      {
        'name': 'Utah',
        'abbreviation': 'UT',
        'url': 'https://secure.utah.gov/voterreg/index.html?fromLocation='
      },
      {
        'name': 'Vermont',
        'abbreviation': 'VT',
        'url': 'https://www.sec.state.vt.us/elections/voters/registration.aspx'
      },
      {
        'name': 'Virginia',
        'abbreviation': 'VA',
        'url': 'https://vote.elections.virginia.gov/VoterInformation'
      },
      {
        'name': 'Washington',
        'abbreviation': 'WA',
        'url': 'https://www.sos.wa.gov/elections/register.aspx'
      },
      {
        'name': 'West Virginia',
        'abbreviation': 'WV',
        'url': 'https://ovr.sos.wv.gov/Register/Landing'
      },
      {
        'name': 'Wisconsin',
        'abbreviation': 'WI',
        'url': 'https://myvote.wi.gov/en-US/RegisterToVote'
      },
      {
        'name': 'Wyoming',
        'abbreviation': 'WY',
        'url': 'http://soswy.state.wy.us/Elections/RegisteringToVote.aspx'
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getStateList: state => {
        return state.stateList
    },
    getStateUrlByRegion: (state) => (region) => {

      const stateObject = state.stateList.find(item => item.abbreviation === region.split("-")[1])

      return (stateObject) ? stateObject.url : null
    }
  }
})
