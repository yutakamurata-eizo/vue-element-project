<template>
  <div class="collapse">
    <div class="sample">
      <h2>Basic Collapse</h2>
      <el-collapse v-model="activeNames1" @change="handleChange">
        <el-collapse-item title="Consistency" name="1">
          <div>
            Consistent with real life: in line with the process and logic of real life, and comply with languages and
            habits that the users are used to;
          </div>
          <div>
            Consistent within interface: all elements should be consistent, such as: design style, icons and texts,
            position of elements, etc.
          </div>
        </el-collapse-item>
        <el-collapse-item title="Feedback" name="2">
          <div>
            Operation feedback: enable the users to clearly perceive their operations by style updates and interactive
            effects;
          </div>
          <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
        </el-collapse-item>
        <el-collapse-item title="Efficiency" name="3">
          <div>Simplify the process: keep operating process simple and intuitive;</div>
          <div>
            Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make
            decisions;
          </div>
          <div>
            Easy to identify: the interface should be straightforward, which helps the users to identify and frees them
            from memorizing and recalling.
          </div>
        </el-collapse-item>
        <el-collapse-item title="Controllability" name="4">
          <div>
            Decision making: giving advices about operations is acceptable, but do not make decisions for the users;
          </div>
          <div>
            Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or
            terminating current operation.
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <div class="sample">
      <h2>Accordion</h2>
      <el-collapse v-model="activeNames2" @change="handleChange" accordion>
        <el-collapse-item title="Consistency" name="1">
          <div>
            Consistent with real life: in line with the process and logic of real life, and comply with languages and
            habits that the users are used to;
          </div>
          <div>
            Consistent within interface: all elements should be consistent, such as: design style, icons and texts,
            position of elements, etc.
          </div>
        </el-collapse-item>
        <el-collapse-item title="Feedback" name="2">
          <div>
            Operation feedback: enable the users to clearly perceive their operations by style updates and interactive
            effects;
          </div>
          <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
        </el-collapse-item>
        <el-collapse-item title="Efficiency" name="3">
          <div>Simplify the process: keep operating process simple and intuitive;</div>
          <div>
            Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make
            decisions;
          </div>
          <div>
            Easy to identify: the interface should be straightforward, which helps the users to identify and frees them
            from memorizing and recalling.
          </div>
        </el-collapse-item>
        <el-collapse-item title="Controllability" name="4">
          <div>
            Decision making: giving advices about operations is acceptable, but do not make decisions for the users;
          </div>
          <div>
            Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or
            terminating current operation.
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <div class="sample">
      <h2>Custom title</h2>
      <el-collapse accordion>
        <el-collapse-item name="1">
          <template slot="title">
            Consistency<i class="header-icon el-icon-info"></i>
          </template>
          <div>
            Consistent with real life: in line with the process and logic of real life, and comply with languages and
            habits that the users are used to;
          </div>
          <div>
            Consistent within interface: all elements should be consistent, such as: design style, icons and texts,
            position of elements, etc.
          </div>
        </el-collapse-item>
        <el-collapse-item title="Feedback" name="2">
          <div>
            Operation feedback: enable the users to clearly perceive their operations by style updates and interactive
            effects;
          </div>
          <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
        </el-collapse-item>
        <el-collapse-item title="Efficiency" name="3">
          <div>Simplify the process: keep operating process simple and intuitive;</div>
          <div>
            Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make
            decisions;
          </div>
          <div>
            Easy to identify: the interface should be straightforward, which helps the users to identify and frees them
            from memorizing and recalling.
          </div>
        </el-collapse-item>
        <el-collapse-item title="Controllability" name="4">
          <div>
            Decision making: giving advices about operations is acceptable, but do not make decisions for the users;
          </div>
          <div>
            Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or
            terminating current operation.
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  data() {
    return {
      activeNames1: ['1'],
      activeNames2: '1',
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
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
