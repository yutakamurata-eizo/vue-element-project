<template>
  <div class="timeline">
    <div class="sample">
      <h2>Basic Timeline</h2>
      <el-row>
        <el-radio-group v-model="reverse">
          <el-radio :label="true">descending</el-radio>
          <el-radio :label="false">ascending</el-radio>
        </el-radio-group>
      </el-row>
      <el-row>
        <el-timeline :reverse="reverse">
          <el-timeline-item v-for="(activity, index) in activities1" :key="index" :timestamp="activity.timestamp">
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </el-row>
    </div>

    <div class="sample">
      <h2>Custom node</h2>
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities2"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>

    <div class="sample">
      <h2>Custom timestamp</h2>
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>Update Github template</h4>
            <p>Tom committed 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="bottom">
          <el-card>
            <h4>Update Github template</h4>
            <p>Tom committed 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>Update Github template</h4>
            <p>Tom committed 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      reverse: true,
      activities1: [
        {
          content: 'Event start',
          timestamp: '2018-04-15',
        },
        {
          content: 'Approved',
          timestamp: '2018-04-13',
        },
        {
          content: 'Success',
          timestamp: '2018-04-11',
        },
      ],
      activities2: [
        {
          content: 'Custom icon',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more',
        },
        {
          content: 'Custom color',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87',
        },
        {
          content: 'Custom size',
          timestamp: '2018-04-03 20:46',
          size: 'large',
        },
        {
          content: 'Default node',
          timestamp: '2018-04-03 20:46',
        },
      ],
    }
  },
}
</script>

<style>
.sample {
  margin-top: 40px;
  padding: 0 20px 20px;
  border: #ddd solid 1px;
  border-radius: 4px;
}
.sample:first-child {
  margin-top: 0;
}
</style>
